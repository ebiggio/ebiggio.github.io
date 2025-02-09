---
title: RUT de clientes en PrestaShop
date: 2025-02-08 00:00:00 -03:00
categories: [PrestaShop]
tags: [prestashop, rut, chile]
description: Módulo gratuito para PrestaShop que implementa el RUT en los clientes.
pin: true
---
PrestaShop, como plataforma e-commerce, es una excelente solución extremadamente robusta y flexible.
Sin embargo, está orientado a un mercado global y, de forma nativa, no tiene soporte para almacenar un identificador como lo es el RUT de un cliente.
Si bien existe un campo que se asemeja (DNI - Documento Nacional de Identidad), este está implementado de una forma particular:

- No está asociado al cliente, sino que a sus direcciones, por lo que un cliente podría tener múltiples DNIs asociados a él.
- No se puede configurar para que sea obligatorio ni único. De hecho, un DNI podría ser compartido por múltiples clientes.
- Al estar asociado a las direcciones, no es un campo que se solicite durante el proceso de registro, y por ende, utilizarlo para validaciones previas al alta de un cliente.
- Se trata de un campo de texto libre, por lo que no se puede garantizar que el valor almacenado sea un RUT válido.
- Al no ser un campo perteneciente a la entidad `Customer`, no hay una forma práctica de visualizarlo y filtrarlo en la lista de clientes del back office.

Con esto en mente, desarrollé un módulo gratuito para PrestaShop que incorpora el RUT en los clientes.
Sin embargo, lo construí desde un punto de vista más general; disponer de un nuevo identificador a nivel de cliente, adicional al correo electrónico, con un manejo lo suficientemente flexible que permita aprovechar en lo posible las capacidades base de PrestaShop.
De ahí a que el módulo se llame "Customer DNI", pero en la práctica, puede ser utilizado para manejar cualquier tipo de identificador que se desee.

## ¿Dónde puedo conseguir el módulo?

El módulo se encuentra disponible en GitHub, en el siguiente enlace: [Customer DNI module for PrestaShop](https://github.com/ebiggio/prestashop-customer-dni).

## Características

- **Presentación en el front office**: el nuevo campo se presenta en el formulario de registro de clientes, permitiendo que el cliente lo complete durante el proceso de alta.
También se presenta en la página de cuenta del cliente, permitiendo que el cliente lo modifique cuando estime conveniente.
- **Presentación en el back office**: el nuevo campo se presenta en la lista de clientes del back office, permitiendo que los administradores puedan visualizarlo y filtrarlo.
También se presenta en la ficha de cliente, permitiendo que los administradores puedan modificar su valor.
- **Campo obligatorio y único**: se puede configurar para que el campo sea obligatorio y único, evitando que un cliente se pueda registrar sin un RUT o con un RUT ya registrado.[^1]
- **Validación mediante una expresión regular**: se puede configurar una expresión regular para validar el valor del campo, aunque para el caso de los RUTs chilenos, la validación se realiza a través de la siguiente característica.
- **Validaciones personalizadas**: se pueden definir validaciones personalizadas para el campo, cargando una clase que implemente la interfaz `CustomValidator` dentro de la carpeta `custom_validators` del módulo.
El módulo incluye así una clase personalizada de validación específica para RUTs chilenos, que verifica que el RUT sea válido y que el dígito verificador sea correcto.
- **Sobrescribir el campo DNI de las direcciones**: se puede configurar que el campo DNI de las direcciones se sobrescriba con el valor del campo DNI del cliente, permitiendo que el RUT se "propague" a las direcciones del cliente.

## ¿Cómo aprovechar el módulo para manejar RUTs chilenos?

Mi recomendación para manejar RUTs chilenos utilizando este módulo es la siguiente:

1. Activar las opciones que establecen el campo como obligatorio y único.
2. Utilizar la siguiente expresión regular para validar el campo: `/^(?!0)\d{7,8}[-]{1}[0-9Kk]$/`. Esta expresión regular valida que el RUT no comience con ceros, tenga entre 7 y 8 dígitos seguidos de un guion, y que el dígito verificador sea un número o una K. 
3. Activar el uso de validaciones personalizadas, considerando que viene incluida una validación específica para RUTs chilenos en el módulo.

## ¿Cuál es la idea detrás de sobrescribir el campo DNI de las direcciones?

Esta opción está pensada para que el RUT sea un valor "visible" por PrestaShop, permitiendo que se pueda referenciar en los procesos de facturación y envío asociados a las direcciones del cliente.

> Esto funciona mejor si se oculta el campo DNI del formato de la dirección en el back office, a fin de evitar confusiones. Aunque no sea visible por el cliente, el módulo internamente se encargará de que el RUT se copie a las direcciones del cliente.
{: .prompt-tip }

Así, por ejemplo, si se saca un reporte de ventas y se quiere incluir el RUT, bastará con referenciar el campo DNI de la dirección asociada con el pedido.
Pero también, esta opción permite que el RUT pueda ser aprovechado por otros módulos que se basen en el campo DNI de las direcciones. Por ejemplo, yo utilizo esta opción para:

- Que al generar boletas electrónicas, se incluya el RUT del cliente en el documento.
- Clasificar a los clientes en grupos según su RUT, permitiendo que se les apliquen descuentos especiales (esto lo hago con *otro* un módulo personalizado que desarrollé, que se basa en el campo DNI de las direcciones para identificar a los clientes).

> Es importante tener presente que, si bien el nuevo campo DNI del cliente está definido con un largo máximo de 255 caracteres a nivel de base de datos, el campo DNI de las direcciones tiene un largo máximo de 16. De esta forma, si se activa la opción de sobrescribir el campo DNI de las direcciones, el módulo truncará el valor del campo DNI del cliente a 16 caracteres antes de copiarlo a las direcciones.
{: .prompt-warning }

## ¿Puedo utilizar este módulo para manejar otros identificadores?

Sí, el módulo fue diseñado para ser lo suficientemente flexible como para manejar cualquier tipo de identificador que se desee.
Por ejemplo, si se quisiera manejar un número de pasaporte, se podría configurar el módulo para que el campo sea obligatorio y único, y que se valide mediante una expresión regular específica para números de pasaporte.

## ¿Puedo contribuir al módulo?

¡Por supuesto! Si tienes alguna idea para mejorar el módulo, o si encuentras un error, no dudes en abrir un *issue* en el repositorio de GitHub del módulo.
También puedes hacer *fork* del repositorio, realizar tus cambios y abrir un *pull request* para incorporarlos al módulo.

## Detalles técnicos

El módulo fue desarrollado con PrestaShop 8.1 en mente, pero *debería* ser compatible con la versión 1.7.7 y superiores.
Durante la instalación, se crea una nueva tabla en la base de datos para almacenar el valor del campo DNI. Esta tiene la siguiente estructura:

```sql
CREATE TABLE IF NOT EXISTS `ps_customer_dni` (
  `id_customer` int(10) UNSIGNED NOT NULL,
  `dni` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_customer`)
)
```

Si necesitas acceder al valor del campo DNI de un cliente en específico, basta con que consultes por su `id_customer`. El módulo también incorpora nuevos hooks personalizados para operar con el campo DNI del cliente de forma programática. El detalle de estos hooks se encuentra en el `README` del módulo.

Si bien el módulo está programado en inglés, incluye traducciones al español (chileno).

[^1]: Es posible que un RUT sea compartido por múltiples IDs de clientes cuando se visualizan los datos de la tabla de la base de datos. Esto se debe a clientes invitados, que *técnicamente* no están registrados en la tienda, pero que han realizado compras. La validación de unicidad se realiza solo sobre los clientes registrados, ya que de lo contrario, se estaría restringiendo la posibilidad de que un cliente invitado luego se registre con un RUT que previamente haya utilizado para una compra.
