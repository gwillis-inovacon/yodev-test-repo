# Comenzando 

¡Bienvenido a yoDEV Workplace!

Puedes comenzar con una página normal, con texto formateado enriquecido, *soporte de markdown*, [enlaces](https://github.com/toeverything/AFFiNE), y muchos otros bloques.

* [ ] Haz clic en cualquier lugar para comenzar a escribir
* [ ] Haz clic para editar esta línea, luego arrastra el asa de la izquierda para reordenar bloques
* [ ] `  /  `para más bloques
* [ ] `  @  ` para vincular y mencionar (`documentos | usuarios | fechas`)
  &#x20; \* \[ ] ej. [](https://workplace.yodev.dev/workspace/c21b8242-0f26-48a4-872d-2f4497ca72fa/v2K4wPDgNM)
  &#x20; \* \[ ] selecciona una fecha para dejar una nota para ese día, ver por fecha en Diarios
* [ ] las listas anidadas se pueden plegar
  &#x20; \* \[ ] para expandir y contraer
  &#x20;   \* \[ ] También los encabezados
* [ ] Haz clic en `+` en la navegación izquierda para nuevos documentos

## Integración de Claude Code

Conecta los servicios MCP de Claude Code a tu espacio de trabajo para habilitar búsqueda, creación y gestión de documentos con IA directamente desde tu terminal.

### Instrucciones de Configuración

1. Abre el menú de tu espacio de trabajo y selecciona **Configuración**
2. En el modal de configuración, selecciona **Integraciones**
3. Haz clic en **Integración de Claude Code**
4. En **Token de Acceso Personal**, haz clic en **Crear Nuevo**
5. La aplicación generará un fragmento de configuración JSON. Haz clic en **Copiar JSON**
6. Abre tu archivo de configuración de Claude en `~/.claude.json` (créalo si no existe)
7. Pega el JSON copiado en la sección `mcpServers` de tu archivo de configuración
8. Reinicia Claude Code para aplicar los cambios

### Servicios Disponibles

* **keyword\_search** — Búsqueda difusa de documentos por palabra clave o frase
* **semantic\_search** — Encuentra contenido relacionado conceptualmente usando embeddings de IA
* **read\_document** — Obtiene el contenido completo de un documento por ID
* **list\_documents** — Navega por todos los documentos en el espacio de trabajo
* **create\_document** — Crea un nuevo documento desde contenido markdown
* **update\_document\_content** — Reemplaza todo el contenido de un documento existente
* **append\_to\_document** — Agrega contenido al final de un documento existente
* **update\_document\_title** — Cambia el título de un documento existente

## Extensión de VS Code

Navega, busca y previsualiza tus documentos de yoDEV Workplace directamente en VS Code sin salir de tu editor.

### Instalación

1. Descarga la extensión: [yodev-workplace-0.1.0.vsix](https://github.com/yoDEV-dev/vscode-extension-releases/releases/download/v0.1.1/yodev-workplace-0.1.1.vsix)
2. En VS Code, abre la vista de Extensiones (`Cmd+Shift+X` en Mac, `Ctrl+Shift+X` en Windows/Linux)
3. Haz clic en el menú **...** y selecciona **Instalar desde VSIX...**
4. Selecciona el archivo .vsix descargado y haz clic en Instalar
5. Haz clic en **Iniciar Sesión con yoDEV** en la barra lateral de yoDEV Workplace para autenticarte

### Características

* **Navegador de Documentos** — Ve todos tus documentos del espacio de trabajo en la barra lateral
* **Búsqueda Rápida** — Presiona `Cmd+Shift+D` para buscar documentos
* **Vista Previa de Documentos** — Previsualiza documentos sin salir de VS Code

## Bloques de datos intensivos

**Tabla**

|     | Column |   |   | Expandable                         |
| --- | ------ | - | - | ---------------------------------- |
| Row |        |   |   | Hover **here** to see drag handles |

| Status                            | Owner |   |
| --------------------------------- | ----- | - |
| Prueba el Lienzo Infinito         | Todo  |   |
| Observa lo que AFFiNE puede hacer | Doing |   |
| Visita AFFiNE                     | Done  |   |
| Invita y colabora                 | Todo  |   |

## Ejemplos de bloques avanzados

* Por ejemplo, matemáticas LaTeX. Para explorar más, escribe `  /  `
  &#x20; \* Para resolver la ecuación $x^2 - 1 = 1$, sigue estos pasos:
  &#x20;   1\. Comienza simplificando la ecuación:
  &#x20;      $&#x20;      x^2 - 1 = 1
  &#x20;     $
  &#x20;   2\. Suma 1 a ambos lados para aislar el término $x^2$:
  &#x20;      $&#x20;      x^2 = 2
  &#x20;     $
  &#x20;   3\. Saca la raíz cuadrada de ambos lados para resolver $x$:
  &#x20;      $&#x20;      x = \pm \sqrt{2}
  &#x20;     $
  &#x20;   Por lo tanto, las soluciones de la ecuación son $x = \sqrt{2}$ y $x = -\sqrt{2}$.

## Continúa explorando en profundidad

Activa el interruptor junto al título para continuar explorando el poder organizativo intuitivo \~ !



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/uBJ0gwSEwO5WU8W57ctCiES4y_tVRGPcJwuue4pPbnA=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AuBJ0gwSEwO5WU8W57ctCiES4y_tVRGPcJwuue4pPbnA%3D%3A1770309630913%2CMEQCIEqZmGWOuHp3GPeRS8XU4VEq1iSwhfpgQQJQ0J7FI0euAiAJcOj2CpAfQK7Gwyy4UVTG6wY1GD9Faqe7D8Sa2rkVSQ%3D%3D)

## Y una cosa más:



A Flowchart template is a diagrammatic tool used to visually represent a process or workflow.

It typically consists of various shapes like rectangles, diamonds, y arrows that denote steps, decisions, y the flow direction, helping to map out y understand complex processes systematically.

Press “S” to quickly place shapes onto the canvas. Other shapes can be selected from the toolbar or swapped from the shape menu.

Press "C" to quickly select the Connector tool. You can draw magnetic between objects on the canvas. The blue handles will let you adjust their exact path.

Flowchart

Group, with title "Group 12"

Group, with title "Group 12"

Connector, with text label "Outgoing enlaces"

Connector, with text label "Backenlaces"

Group, with title "Group 13"



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/VZJPB8ZBVtiZ-m04KNtlguY_t9VLx4itHILIQ3l1MRw=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AVZJPB8ZBVtiZ-m04KNtlguY_t9VLx4itHILIQ3l1MRw%3D%3A1770309630913%2CMEYCIQDwV0jzTGra0qbUcZ7JPuEW6ZCax8Uusas%2BqR7kZQZEAQIhAKltjpjN40kBBjX%2F5DQQ8sR3LCwKQkMSsGi2vERphmJ2)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/W-RCNTaadPNEI9OALAGHqv1cGmYD1y7KxIRGLsbr-DM=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AW-RCNTaadPNEI9OALAGHqv1cGmYD1y7KxIRGLsbr-DM%3D%3A1770309630913%2CMEYCIQCM%2BmIc12ssWWGdjwAR41QhXWSGiHVTw4fQXTHNR4uLHQIhAJKVh%2FlFifn0%2FsNZataUwHfYIr%2FZIp191yqn6MqDz8kO)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/eT4Nbl90OC9ivTjRBmEabaWqjdmITjCgOtTJNSJu1SU=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AeT4Nbl90OC9ivTjRBmEabaWqjdmITjCgOtTJNSJu1SU%3D%3A1770309630913%2CMEUCIGO0rl%2Fc%2F2QcipoDdjzp%2BTxf1WGMHfhA7z24%2FJfv4aVKAiEAlLT0L9BTWnxURcjCQu7AiI3PEVTfyNM3Pvi00%2BrQ4Qw%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/HDozRCXEtlDfNFFs3sSozkvXUVAP3XXd3zQVI8aW1ak=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AHDozRCXEtlDfNFFs3sSozkvXUVAP3XXd3zQVI8aW1ak%3D%3A1770309630913%2CMEUCIBtZQV7j1utYYb1YYQadmTyf3NHj%2BVSYH7WmgkKGYJaAAiEA5R8FldhpEGrE47CbNZhbvBPiTBTEpxw8vDMAbXjFlQk%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/kwKlgzVYNRk4AyOJs3Xtyt0vMWovo-7BfEqaWndDInM=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AkwKlgzVYNRk4AyOJs3Xtyt0vMWovo-7BfEqaWndDInM%3D%3A1770309630913%2CMEYCIQDg0uF5vSUSbN%2BmKOdzbwoMCWKWvQWC5TOTHc5Id%2B9OXwIhALOPQW864yz938FE7%2F22JqD2LZ5d6f%2FjeTORL2DcFA2d)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/cQnt7T9qxI5-It-reeo3E4XVA3HA89L2myi1k2EJfn8=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AcQnt7T9qxI5-It-reeo3E4XVA3HA89L2myi1k2EJfn8%3D%3A1770309630913%2CMEUCIQDfQCKfMJw%2Fjc87OKa4s9nC9ukevxDuaetLk1VIJKnA%2FgIgdEiBT9WGGnB9YHwsHe4wlVyBA2je9ifNxW6siXgY5lU%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/i3piAMnoD4STQnEjTrAe_ZRdwHcD34n-sJZY8IN1blg=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3Ai3piAMnoD4STQnEjTrAe_ZRdwHcD34n-sJZY8IN1blg%3D%3A1770309630913%2CMEUCIQC7Iel0BKM4I7c81Sk4P4cVeYl8%2B%2B4KbyYmpuiFVIoyOgIgUWmkC7BaVv0JfYonx5EdWt8hjXdoJG68uimqyem9bCM%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/IS6xbnAo5WXDRxnP98UBkdOP2Zt2luQXEojcLfnfsR4=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AIS6xbnAo5WXDRxnP98UBkdOP2Zt2luQXEojcLfnfsR4%3D%3A1770309630913%2CMEUCIQDyqIbsPElrZlQyYJyz%2F%2B%2BiyvJkI1vxCOC%2FAty%2F%2FjOTAwIgOAFqkOF6ml1Dp6DcDU%2FGoPIrriNsIf3Hgiqph8jbDhQ%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/3OujPx_YOY1MTqmgrbWaNDJlJeoLNvTWw96gW22rxps=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3A3OujPx_YOY1MTqmgrbWaNDJlJeoLNvTWw96gW22rxps%3D%3A1770309630913%2CMEUCIQDth40pTCS9vlJI7VHor6GyHLb23MsoxsLs44qbxoy10QIgTOjav5Va%2BZxiBaZkzqEJ0nEjOkQKk1XaOLib449w1Uo%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/j13ZqHGUnVdGW3_1uWw_sFYeHj1SFoNsi5JwrTvpC-k=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3Aj13ZqHGUnVdGW3_1uWw_sFYeHj1SFoNsi5JwrTvpC-k%3D%3A1770309630913%2CMEUCIQCZVmbBdWmOE2pNwiJ%2FPpXV1p27DADc%2FrzYs9kCiPciswIgXvcUn93b1ektQYL2Xy1UoIIe1lUa6GnTmRqAvs7R1gk%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/_dXUvx5tTcm4IykbislTxwNoSLJ4g3oqmd7A9x4ONdY=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3A_dXUvx5tTcm4IykbislTxwNoSLJ4g3oqmd7A9x4ONdY%3D%3A1770309630913%2CMEUCIQCWOkWtM9F3Ol6gzz4I2xp3i9%2BdjTV%2FXxnKrAvIqXzI5AIgHSTxQkUovUYVTrH0T9J0to6mbVV4a9Cw4EuUyscigxo%3D)

[AFFiNE: One App for All - Where Notion Meets Miro](https://www.youtube.com/watch?v=WqOe9HgpsDY)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/Qc7GmuDZmGIxbQkYlKi-rA1lcn7-ZbLTzbim0Ww_Oaw=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AQc7GmuDZmGIxbQkYlKi-rA1lcn7-ZbLTzbim0Ww_Oaw%3D%3A1770309630913%2CMEUCIG2zG6WM4OfzwejTK9UEwTtYLEbCSsLKOgMGJxgF8nbiAiEAmonp4b9LmJ8uOotSiSozsRsWDL0hhRJ52dyB2MTaeDE%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/4Pd3nlOWl6vwhEOB6c2Isyhp-O5zALhun7-hKzwanYU=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3A4Pd3nlOWl6vwhEOB6c2Isyhp-O5zALhun7-hKzwanYU%3D%3A1770309630913%2CMEUCIQCqCwvP4Zu2mtTaAyrgSoO32gbSI7ZUzoN%2BhPMNkvLA0gIgDADD9aYPLKEeLTfncrigux08jNnKZLPgikSrNi08GHA%3D)

Stickers como estos se agregan usando el sello de plantilla

[AFFiNE - All In One KnowledgeOS](https://affine.pro/)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/JHrcbru2ztXmKH4JUuYL5ws7uQEvyfhtewbtRiTJY0I=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AJHrcbru2ztXmKH4JUuYL5ws7uQEvyfhtewbtRiTJY0I%3D%3A1770309630913%2CMEUCIQDnehJs4DL7jCTdv93pPFW9wCBpu%2FJG5p5rHcBFb%2FD0bAIgPG%2BBeln2WxUJCwBRVOUnbFLCjvaPsGlgqHlJ7i4w8VM%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/74nlTqf1U4wUPx03OANS96AsCk6ZhCGua2n911phsqE=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3A74nlTqf1U4wUPx03OANS96AsCk6ZhCGua2n911phsqE%3D%3A1770309630913%2CMEQCIEZv%2BpN0a5qY%2F4lTHK5%2BWqzlO6gBdZivFWUgnSG7VaeJAiAt2uv%2FPpMrV6nv8AWR0Gpq8k%2FRlDT21PUA5pX9MEAxwg%3D%3D)



![](https://workplace.yodev.dev/api/workspaces/c21b8242-0f26-48a4-872d-2f4497ca72fa/blobs/EB0Wx5RCOVW4NnebxvMUoGQuHYFVfmLpspbwTj1xOOQ=?token=c21b8242-0f26-48a4-872d-2f4497ca72fa%3AEB0Wx5RCOVW4NnebxvMUoGQuHYFVfmLpspbwTj1xOOQ%3D%3A1770309630913%2CMEQCIA%2BDLv6XQSKjVWCYiBrmJNMeTFiIujQNl9MuYFexWMnLAiAcjM5VK4VK4f9PwSQ8fKES8R06GElKKnZutWtKkHJ5%2BA%3D%3D)
