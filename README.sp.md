[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Plantilla de Excel para el Cálculo del Costo en Destino (Landed Cost), la Variación de Embarques y la Recuperación de Deducciones de Minoristas (FMCG y Puente de Margen de Importación)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool type: Cost Accounting & Margin Recovery](https://img.shields.io/badge/Tool-Landed%20Cost%20%26%20Deduction%20Audit-051C2C)

<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/2b016445-ce04-4943-8a86-f1371b49f1a3" />

**Una calculadora de costo en destino (landed cost) para importaciones, un modelo de conciliación de variaciones de costos de embarque y una plantilla de Excel para la recuperación de contracargos y deducciones de minoristas. Diseñada para importadores de bienes de consumo (FMCG), analistas de cadena de suministro y controladores financieros comerciales que necesitan conciliar las estimaciones de las órdenes de compra contra el flete marítimo real, los aranceles aduaneros, el tipo de cambio (FX) y el transporte portuario local—mientras auditan las deducciones de remesas de minoristas (incluidas Woolworths, Coles, ALDI, Kmart y Big W) para revelar el margen neto real a nivel de SKU.**

> **Acceda a las herramientas de Landed Cost y Puente de Margen Minorista (sin registro ni instalación)**
>
> - 🌐 **[Lance el simulador web gratuito de Landed Cost y puente de margen](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)** — Pruebe al instante en su navegador la variación de costo en destino de OC a embarque, la descomposición del impacto cambiario y la clasificación de deducciones de minoristas (Edición HTML gratuita).
> - 📥 **[Descargue el libro de Excel completo de Landed Cost y deducciones de minoristas (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** — Obtenga la plantilla de matriz dinámica de Microsoft Excel de 5 hojas para la conciliación de embarques sin conexión, el seguimiento de disputas de remesas y las auditorías recurrentes de rentabilidad por SKU *(Edición Comercial de Pago — respaldada por una garantía de devolución de 30 días)*.


Diseñada específicamente para **flujos de trabajo de abastecimiento en el extranjero y distribución de importación**—abarca órdenes de compra a fábricas ultramarinas, flete marítimo internacional, despacho aduanero australiano (DAFF/ABF), transporte portuario local y distribución mayorista hacia las principales cadenas minoristas (**Woolworths, Coles, ALDI, Kmart y Big W**). En lugar de reemplazar su ERP, su contabilidad general o su agente de aduanas, este Analizador de Costeo de Producto y Conciliación (PCRA) actúa como una capa auditable de apoyo a decisiones que responde a una pregunta comercial crítica:

**Una vez conciliados por completo el precio de compra FOB, el flete marítimo, los aranceles aduaneros, la manipulación portuaria local, las fluctuaciones del tipo de cambio (FX) y las deducciones de remesas de los minoristas, ¿qué margen neto de producto queda realmente—y qué excepciones requieren una acción inmediata de disputa o de reprecio?**

---

## Métricas Clave de Costeo de Importación y Problemas de Fuga de Margen Minorista que Resuelve

En lugar de gestionar facturas de transitarios desconectadas, hojas de despacho aduanero y PDF de remesas de minoristas, este marco unifica la contabilidad de costos y la auditoría de deducciones comerciales. Así es como el modelo vincula los **puntos de dolor de importación y distribución minorista** con **métricas automatizadas de puente de margen**:

| Punto de dolor de margen en importación y retail | Mecanismo automatizado de conciliación y auditoría | KPIs clave de costeo y margen monitoreados |
| :--- | :--- | :--- |
| **Costos estándar / estimados en destino subestimados** | Recalcula la línea base real del costo en destino por OC y SKU a partir de reglas de componentes en bruto, exponiendo elementos de costo omitidos antes de que distorsionen los precios mayoristas. | Costo estándar en destino esperado vs. recalculado ($/unidad), indicador de subestimación de la línea base |
| **Flete marítimo, aranceles y cargos portuarios no asignados** | Asigna el flete marítimo real a nivel de contenedor, los aranceles aduaneros, la manipulación de terminal portuaria (THC) y el transporte local entre las cantidades verificadas de unidades recibidas. | Costo en destino realizado por unidad, desglose de flete/arancel/puerto/transporte por SKU |
| **Sobrecostos combinados de FX vs. logística** | Descompone la variación total del costo del embarque aislando el tipo de cambio (presupuestado vs. spot/cubierto real) de los picos operativos de flete y aranceles. | Variación total del costo en destino ($ / %), impulsor de variación cambiaria, atribución de sobrecostos de flete y arancel |
| **Informes ilusorios de "Margen Bruto Contable"** | Construye un puente de margen por SKU de múltiples etapas que conecta el margen contable con los costos realizados del embarque y las deducciones de minoristas posteriores a la venta. | Margen Bruto Contable (%) $\rightarrow$ Margen en Destino Realizado (%) $\rightarrow$ Margen Neto Efectivo (%) |
| **Códigos crípticos de remesas y contracargos de minoristas** | Normaliza códigos de deducción fragmentados de los principales supermercados y almacenes en categorías estandarizadas (rebates contractuales vs. multas disputables). | Categoría de deducción normalizada (Términos Comerciales, Co-op, Multas DIFOT/OTIF, Merma/Daño), alertas de códigos no mapeados |
| **Recuperaciones perdidas de reclamos y contracargos de minoristas** | Señala deducciones disputables de alto valor contra umbrales configurables en dólares, asignando responsables de disputa y listas de verificación de evidencia POD/entrega requerida. | Fondo de deducciones recuperables ($), estado de recuperación de disputas, cola de excepciones de SKU de alta prioridad |

---

## Tutorial Paso a Paso: Cómo Conciliar Costos de Importación en Destino y Auditar Deducciones de Minoristas

El libro sigue un **flujo de trabajo estructurado de 4 etapas de cierre de embarque y conciliación financiera mensual**: configure una sola vez sus tipos de cambio, aranceles y mapeos de códigos de minoristas, inserte las exportaciones en bruto del ERP/remesas, inspeccione el puente de variaciones y active las recuperaciones de reclamos.

### Paso 1: Configurar Tipos de Cambio, Umbrales de Variación y Mapeos de Deducciones de Minoristas
Abra la hoja `01_Rules_Mapping` para establecer sus parámetros de gobernanza comercial y tablas de búsqueda:

- **Controles financieros y de FX:** Defina el período de reporte, la moneda contable base (p. ej., `AUD` / `USD`), el tipo de cambio presupuestado, el tipo de cambio real realizado y el piso objetivo de margen bruto.
- **Umbrales de alertas por excepción:** Defina las tolerancias aceptables de variación del costo en destino (%) y el umbral en dólares para alertas de deducciones de minoristas de alto valor.
- **Normalización de aranceles y códigos de minoristas:** Revise las tasas de aranceles aduaneros y mapee los códigos propietarios de deducciones de minoristas (en Woolworths, Coles, ALDI, Kmart, Big W) a categorías contables estandarizadas y reglas de elegibilidad de recuperación.

### Paso 2: Importar Estimaciones de OC, Facturas de Aduanas y Estados de Remesa de Minoristas
Exporte registros de transacciones en bruto desde su ERP, sistema de inventario, agente de aduanas o portales de proveedores de minoristas (p. ej., SAP, NetSuite, MYOB, Cin7, Dear/Unleashed, CSV de remesas de proveedores) y péguelos en los bloques de entrada estructurados de `02_Source_Data`:

- **Compras y recepción:** Estimaciones de costos de Órdenes de Compra (OC) y cantidades reales recibidas en almacén por SKU.
- **Logística y despacho aduanero:** Facturas reales de flete internacional, liquidaciones de aranceles aduaneros, cargos portuarios y facturas de transporte local.
- **Ventas comerciales y deducciones:** Facturas de ventas brutas de minoristas y estados de deducción de remesas línea por línea (conservando los ID de referencia de documentos originales para la trazabilidad de auditoría).

### Paso 3: Auditar el Motor de Costo en Destino y la Descomposición de Variaciones
Recorra las hojas de cálculo automatizadas para verificar la economía del embarque antes de finalizar los informes gerenciales:

1. **Verificación de la línea base de costos (`03_Cost_Engine`):** Inspeccione el costo estándar en destino recalculado por SKU para detectar supuestos de arancel o flete faltantes en su hoja de precios inicial.
2. **Conciliación de variaciones y deducciones (`04_Reconciliation`):** Revise los costos reales en destino por unidad, la atribución de variaciones impulsor por impulsor (FX vs. Flete vs. Arancel vs. Puerto), los grupos normalizados de deducciones de minoristas y los indicadores automatizados de recuperación.
3. **Verificación de integridad de residuo cero:** Verifique que todas las advertencias de validación estén resueltas y que el residuo de conciliación sea igual a cero antes de confiar en los resultados ejecutivos.

### Paso 4: Priorizar Disputas de Contracargos y Operacionalizar en el Libro de Excel
Abra `05_Management_Summary` para convertir las variaciones financieras en acciones comerciales:
- Inspeccione el **Puente de Margen** para los productos que sufren una erosión severa (p. ej., un SKU que cae de un `35% Book Gross Margin` a un `24% Net Effective Margin`).
- Revise la **Cola de Recuperación de Disputas**, asigne un gerente de cuentas o responsable logístico, recopile la evidencia de prueba de entrega (POD) o correos del comprador, y realice el seguimiento del estado del reclamo hasta su resolución.

> 🚢 **¿Listo para detener la fuga de margen en sus embarques de importación y cuentas minoristas?** 
> Después de explorar el puente de variaciones en el **[Simulador Gratuito de Landed Cost y Margen en el Navegador](https://hyvoid.github.io/landed-cost-calculator-retail-deduction-excel/)**, obtenga el **[Libro de Excel Completo de PCRA para Recuperación de Costos en Destino y Deducciones (.xlsx)](https://theseusworkshop.com/l/nakbxr?utm_source=github&utm_medium=GitHub%20README)** para procesar sus propios lotes de embarques sin conexión, personalizar los mapeos de deducciones de minoristas y mantener una auditoría mensual de margen repetible *(requiere Microsoft 365 o Excel 2021+ para fórmulas de matriz dinámica; respaldado por una garantía de devolución de 30 días)*.

---

## Por Qué Construí Este Marco de Landed Cost de Importación y Puente de Margen Minorista

En un negocio de importación ultramarina y distribución minorista mayorista, el precio de compra FOB de fábrica es apenas la línea de salida del costeo del producto.

Una cotización comercial normalmente se elabora meses antes usando un tipo de cambio presupuestado y un flete de contenedor estimado. Cuando el embarque físico pasa la aduana, el importador enfrenta sobrecargos reales de flete marítimo, aranceles aduaneros, tarifas de manipulación de terminal portuaria y facturas de transporte local. Semanas después de la entrega a los centros de distribución minoristas, llegan los avisos de remesa de los minoristas—deduciendo rebates promocionales co-op, penalidades por entregas tardías DIFOT/OTIF, multas de cumplimiento de códigos de barra/cajas o reclamos por faltantes. Como estos registros llegan con semanas de diferencia entre transitarios, agentes de aduanas, equipos de almacén y cuentas por cobrar, rara vez conviven en el mismo sistema.

### La Ilusión del "35% de Margen Contable vs. 24% de Margen Neto Efectivo"
La falla analítica central en la distribución mayorista es tratar cada hoja departamental como completa:
- Una **hoja de costos de compras** puede ser matemáticamente exacta y, aun así, omitir por completo el transporte portuario local o las tasas de despacho aduanero.
- Un **informe de margen bruto de ventas** se ve saludable con un **35% de Margen Contable** porque se basa en costos estándar en destino desactualizados.
- Un **libro mayor de cuentas por cobrar** cancela las deducciones de cumplimiento de minoristas como un costo rutinario de hacer negocios sin verificar si los POD del almacén respaldan una disputa formal—o, a la inversa, desperdicia horas del personal persiguiendo rebates contractuales que no son recuperables.

Cuando los sobrecostos reales del embarque y las deducciones de minoristas no recuperadas se conectan, ese SKU con un "saludable" **35% de margen bruto contable frecuentemente colapsa a un 24% de margen neto efectivo**. Al 24%, la acción comercial cambia por completo: el equipo debe repreciar el SKU de inmediato, renegociar términos de flete/proveedor, corregir el cumplimiento DIFOT del almacén o presentar un reclamo de recuperación de deducción.

Construí PCRA para empaquetar ese flujo de diagnóstico de extremo a extremo en un libro inspeccionable y repetible—haciendo visibles los supuestos de costos ocultos y las deducciones de minoristas disputables antes de que la erosión del margen se vuelva permanente.

---

## Hojas de Cálculo de Importación Desconectadas vs. Motor Integrado de Landed Cost y Deducciones

| Dimensión de costeo y auditoría de margen | Exportaciones de ERP desconectadas y hojas de costos ad hoc | Libro de PCRA de Landed Cost y Puente de Margen (esta herramienta) |
| :--- | :--- | :--- |
| **Líneas base de costo estándar en destino** | Las tarifas portuarias omitidas o los aranceles mal calculados fluyen silenciosamente a las listas de precios mayoristas y a los informes de margen. | Recalcula de forma independiente el costo en destino esperado por OC y SKU, señalando líneas base subestimadas antes de la revisión de precios. |
| **Asignación de flete y aduanas posterior a la OC** | Las facturas de flete de contenedor, aranceles y transporte local llegan tarde y se registran en cuentas generales de suma alzada. | Asigna los cargos logísticos y aduaneros reales a nivel de embarque entre las cantidades de unidades recibidas hasta el nivel de SKU. |
| **Atribución de variaciones FX vs. flete** | Los equipos financieros ven un sobrecosto total pero no pueden aislar la depreciación monetaria de los aumentos de tarifas del transitario. | Descompone la variación del costo en destino por impulsor específico (**movimiento cambiario, flete marítimo, arancel aduanero, manipulación portuaria, transporte local**). |
| **Normalización de deducciones multi-minorista** | Los códigos crípticos de remesas de Woolworths, Coles, ALDI, Kmart y Big W impiden el análisis de pérdidas entre cuentas. | Normaliza los códigos de deducción específicos de cada minorista en grupos estructurados y resalta los códigos no mapeados para su clasificación inmediata. |
| **Recuperación de contracargos y multas minoristas** | Las multas DIFOT disputables y los reclamos por faltantes quedan enterrados dentro de las deducciones de rebates promocionales, dejando efectivo sobre la mesa. | Aplica umbrales en dólares, indicadores de elegibilidad de recuperación, asignación de responsables y listas de evidencia para construir una cola de disputas accionable. |
| **Visibilidad real de la rentabilidad por SKU** | La dirección se apoya en un único Margen Bruto % titular que enmascara sobrecostos de cadena de suministro y fugas de cumplimiento minorista. | Genera un **Puente de Margen por SKU** de extremo a extremo (`Book Gross Margin` $\rightarrow$ `Realized Landed Margin` $\rightarrow$ `Net Effective Margin`). |

---

## Para Quién Está Diseñada Esta Herramienta de Costeo y Conciliación: Roles y Flujos de Trabajo

Este kit de herramientas de doble formato (Simulador Gratuito en el Navegador + Libro Comercial de Excel) está diseñado para equipos financieros, de cadena de suministro y comerciales minoristas que operan en bienes de consumo con alta intensidad de importación:

- **Importadores, mayoristas y operadores de marcas FMCG:** Obtenga visibilidad completa de la economía unitaria ultramarina. Use la **calculadora de costo en destino de importación** para verificar los costos reales de llegada del contenedor desde fábricas de Asia/ultramar hasta el despacho portuario australiano y la entrega nacional.
- **Contadores de costos, controladores financieros y equipos comerciales de FP&A:** Reemplace las conciliaciones frágiles de variaciones de fin de mes con una **plantilla estandarizada de conciliación de costo en destino de OC a real**. Separe ganancias/pérdidas cambiarias de variaciones de flete y concilie el costo de bienes vendidos (COGS) con trazabilidad documental completa.
- **Gerentes de Cuentas Nacionales (NAMs) y líderes comerciales minoristas:** Deje de volar a ciegas en las revisiones de surtido de los minoristas. Use el **puente de margen por SKU y analizador de deducciones** para ver exactamente cómo los términos comerciales, los rebates promocionales y las penalidades de cumplimiento impactan la rentabilidad neta en **Woolworths, Coles, ALDI, Kmart y Big W**.
- **Especialistas en Cuentas por Cobrar (AR) y Recuperación de Deducciones:** Convierta estados de remesa caóticos de minoristas en un **rastreador de disputas de contracargos** priorizado. Aísle multas de cumplimiento y reclamos por faltantes de alto valor de los rebates contractuales para que su equipo solo persiga efectivo recuperable respaldado por evidencia de entrega.
- **Analistas de cadena de suministro, logística y compras:** Audite facturas de transitarios, clasificaciones arancelarias de agentes de aduanas y cargos de transporte portuario por unidad recibida para identificar ineficiencias de utilización de contenedores y sobrecobros de proveedores.

---

## Casos de Uso del Sector y Escenarios de Importación/Retail de Cola Larga

Ya sea que importe artículos para el hogar de marca propia, bienes de consumo rápido (FMCG), indumentaria o ferretería hacia las principales cadenas minoristas, este modelo se adapta a escenarios de margen de alta fricción:

### 1. Auditoría de Deducciones en Supermercados y Tiendas por Departamento Australianas (Woolworths, Coles, ALDI, Kmart, Big W)
Abastecer a los principales minoristas nacionales australianos implica navegar términos comerciales complejos con proveedores, financiamiento promocional, tolerancias de mermas (ullage) y regímenes estrictos de cumplimiento de la cadena de suministro (como ventanas de entrega DIFOT / OTIF y reglas de etiquetado de pallets/cajas). Al mapear las combinaciones de **Minorista + Código de Deducción** en `01_Rules_Mapping`, los equipos comerciales pueden separar automáticamente los rebates contractuales acordados de las penalidades de cumplimiento disputables.

### 2. Descomposición de Variaciones de Flete Marítimo por Contenedor, Aranceles y FX
Cuando una Orden de Compra ultramarina se cotiza a `0.68 AUD/USD` con una tarifa estimada de flete de contenedor de `$3,500`, pero pasa la aduana tres meses después a `0.64 AUD/USD` con sobrecargos de congestión de temporada alta y cargos por detención portuaria, los márgenes nominales del producto se evaporan. El motor de `04_Reconciliation` aísla cuánto del pico de costo por unidad fue impulsado por el **movimiento cambiario frente a la inflación logística**, informando si finanzas debe ajustar la cobertura cambiaria o si compras debe renegociar las tarifas del transitario.

### 3. Justificación de Aumentos de Precios Mayoristas y Preparación de Revisiones de Surtido
Los compradores minoristas rara vez aceptan aumentos de precios mayoristas basados en afirmaciones vagas de "costos de cadena de suministro en aumento". Use la **línea base recalculada del costo en destino y el desglose de impulsores de variación** para presentar evidencia de costos verificable a nivel de componentes (arancel, flete marítimo, FX) durante las negociaciones con compradores minoristas, o identifique SKUs crónicamente no rentables que requieran deslistado o reingeniería.

---

### Alcance Operativo y Descargo de Responsabilidad de Gobernanza
*PCRA es un marco analítico de apoyo a decisiones y un libro de conciliación de costos—no un ERP transaccional, ni una contabilidad general estatutaria, ni un sistema de presentación de despacho aduanero con licencia, ni un servicio de asesoría fiscal, ni un portal automatizado de disputas con minoristas. No verifica de forma independiente facturas de flete de terceros, ni establece el derecho legal de recuperar una deducción minorista, ni presenta reclamos ante compradores minoristas. La precisión de los resultados depende estrictamente de la integridad de los registros fuente, los mapeos de códigos y los supuestos de parámetros provistos por el usuario. La edición comercial de Excel requiere **Microsoft 365 o Excel 2021 y posteriores** (con soporte para fórmulas de matriz dinámica).*

---

## Sobre el Creador

Diseño herramientas operativas ligeras e inspeccionables de apoyo a decisiones para flujos de trabajo comerciales recurrentes que tienen demasiadas variables móviles para seguir mentalmente, pero que no requieren desplegar una costosa suite de software empresarial. La pregunta guía de ingeniería es: **¿qué puntos de datos exactos de costos, logística y comerciales deben reunirse en un solo lugar para tomar con confianza la próxima decisión de precios o de disputa?**

## Detalles Técnicos

<details>
<summary>Para revisores técnicos, practicantes de Excel y colaboradores</summary>

### Arquitectura del Libro

El diseño de Excel utiliza cinco hojas y un flujo unidireccional desde la configuración y los datos fuente hasta los cálculos y las salidas gerenciales.

| Hoja | Rol | Entradas o salidas principales |
|---|---|---|
| `01_Rules_Mapping` | Control de parámetros y mapeos | Moneda base, período de reporte, tipos de cambio presupuestado/real, tolerancias, mapeos de aranceles, mapeos de deducciones de minoristas, listas de validación |
| `02_Source_Data` | Ingesta de datos fuente | OC y costos estimados; flete de embarque, aranceles, cargos portuarios y cantidad recibida; facturas de minoristas, cantidades facturadas y deducciones |
| `03_Cost_Engine` | Recálculo del costo en destino | Valor FOB recalculado, arancel estándar, costo en destino, variación de línea base, estado de auditoría |
| `04_Reconciliation` | Revisión de variaciones de costos y deducciones | Costo en destino real por unidad, variación total, componentes de la variación, categoría de deducción normalizada, indicador de recuperación, estado, guía de evidencia |
| `05_Management_Summary` | Vista de decisión | Ventas netas, etapas de margen, erosión de margen, excepciones de SKU de alto impacto, resúmenes de deducciones y recuperaciones de minoristas |

```text
01_Rules_Mapping ───────┐
   │ parameters/rules   │ validation and lookups
   ▼                    ▼
02_Source_Data ──────► 03_Cost_Engine
   │                         │ recalculated baseline
   └─────────────────────┬───┘
                         ▼
                 04_Reconciliation
                  │ variance + claims
                  ▼
                05_Management_Summary
```

**Grupos de datos principales**

- `Table_FX`: código de moneda, tipo de cambio presupuestado, tipo de cambio real y movimiento cambiario calculado.
- `Table_Duty`: categoría, prefijo de código HS, tasa de arancel predeterminada y tasa de arancel FTA.
- `Table_Deductions`: minorista, código de deducción en bruto, categoría normalizada, clasificación comercial, indicador de recuperabilidad, responsable de la acción y evidencia requerida.
- `Table_PO_Est`: identidad OC/SKU, cantidad ordenada, moneda, precio unitario FOB, flete estimado, tasa de arancel estimada, otros costos en destino estimados y costo en destino contable.
- `Table_Actual_Logistics`: referencia OC/embarque, flete real, aranceles, costos portuarios/transporte local y cantidad recibida.
- `Table_Retail_Deductions`: registros de facturas y deducciones de minoristas, incluidos códigos en bruto y montos.

El documento de diseño fuente especifica 29 campos de entrada (`In-01` a `In-29`) y 21 salidas clave (`Out-01` a `Out-21`). La capa de salida depende de los mapeos de parámetros y los datos fuente; el resumen depende del motor de costos y los resultados de conciliación.

### Tres Trampas que Atrapan Incluso a Analistas de Costos de Importación Experimentados

#### Trampa 1 — Tratar la cifra existente de costo en destino como verificada

1. **Decisión:** Mantener el precio de venta actual de un SKU porque el libro muestra un margen aceptable.
2. **Supuesto oculto:** El costo en destino contable incluye cada componente relevante y usa la base de conversión correcta.
3. **Cómo cambia la recomendación:** Una línea base recalculada puede exponer flete, arancel o cargos locales omitidos. Un margen que parecía aceptable puede requerir reprecio o una corrección del modelo de costos.
4. **Por qué falla el razonamiento original:** Un valor histórico de celda no es evidencia de que su cálculo subyacente esté completo.
5. **Enfoque corregido:** Recalcular el costo estándar a partir del tipo de cambio mapeado, el precio FOB, el flete estimado, el arancel estimado y otros cargos en destino; compararlo con el costo contable registrado.
6. **Resultado de la decisión:** Escalar las diferencias materiales antes de usar la línea base para precios o evaluación de desempeño.

<details>
<summary>Referencia de fórmulas — línea base de costo en destino</summary>

Lógica de negocio ilustrativa:

```text
Recalculated FOB (base currency) = FOB unit price × selected FX rate
Recalculated duty = recalculated FOB × applicable duty rate
Recalculated landed cost per unit
  = recalculated FOB + estimated freight per unit
    + recalculated duty + estimated other landed cost
Baseline variance = recalculated landed cost − book landed cost
```

El diseño fuente usa `XLOOKUP`, `LET`, `FILTER` y salidas de matriz dinámica para aplicar los mapeos y extender los cálculos a través de los registros poblados. La base impositiva exacta y el tratamiento arancelario deben confirmarse para los bienes aplicables y el despacho aduanero correspondiente.

</details>

#### Trampa 2 — Tratar el sobrecosto total como causa raíz

1. **Decisión:** Pedir al equipo logístico reducir el flete porque el costo total en destino excedió la estimación.
2. **Supuesto oculto:** El flete es el principal impulsor de la variación.
3. **Cómo cambia la recomendación:** La diferencia puede deberse en cambio a tipos de cambio, aranceles, cargos portuarios/transporte local, discrepancias de cantidades o más de un factor.
4. **Por qué falla el razonamiento original:** Una variación total cuantifica el resultado, no su causa.
5. **Enfoque corregido:** Comparar los costos unitarios reales con la base esperada, calcular los componentes de variación disponibles y verificar que su suma concilie con el total.
6. **Resultado de la decisión:** Asignar la investigación al responsable de costos más plausible, manteniendo visibles las diferencias no resueltas o no mapeadas.

<details>
<summary>Referencia de fórmulas — conciliación de variaciones</summary>

```text
Total cost variance
  = (actual landed cost per unit − expected landed cost per unit)
    × actual received quantity

Freight variance = (actual freight per unit − estimated freight per unit)
                   × actual received quantity
Duty variance    = (actual duty per unit − expected duty per unit)
                   × actual received quantity
FX variance      = FOB amount × (actual FX rate − budget FX rate)
                   × actual received quantity
Port variance    = (actual port cost per unit − estimated other landed cost)
                   × actual received quantity

Residual = total variance − sum of mapped variance components
```

Un residuo de cero es una útil verificación aritmética interna, no una prueba de que cada valor fuente o atribución sea económicamente correcto. El ejemplo actual de variación de precio de la especificación fuente reutiliza el mismo valor FOB para el precio real y el esperado, lo que hace que ese componente sea cero por construcción. Una verdadera variación de precio de compra requiere un precio FOB esperado distinto o un campo documentado de ajuste de precio. La lógica de los componentes debe validarse antes de usar el modelo para reportes formales.

</details>

#### Trampa 3 — Tratar cada deducción de minorista como pérdida o como reclamo recuperable

1. **Decisión:** Cancelar todas las deducciones, o perseguir cada deducción como un reclamo.
2. **Supuesto oculto:** Todos los códigos de deducción tienen el mismo estatus contractual y requisitos de evidencia.
3. **Cómo cambia la recomendación:** Un rebate contractual puede ser un costo comercial normal, mientras que una multa por cumplimiento de entrega puede justificar una investigación si el registro de entrega contradice el reclamo.
4. **Por qué falla el razonamiento original:** Un código o monto en bruto por sí solo no establece la clasificación comercial ni el derecho de recuperación.
5. **Enfoque corregido:** Normalizar el par minorista/código, aplicar un indicador de recuperabilidad revisado, identificar el responsable y la evidencia requerida, y priorizar los ítems de alto valor.
6. **Resultado de la decisión:** Enfocar el esfuerzo en reclamos con base plausible y documentación de respaldo suficiente; dejar los códigos desconocidos visiblemente sin resolver.

<details>
<summary>Referencia de fórmulas — mapeo y priorización de deducciones</summary>

El diseño fuente construye una clave de búsqueda normalizada a partir del nombre del minorista y el código en bruto, luego usa `XLOOKUP` para recuperar la categoría de deducción, el indicador de recuperabilidad y la guía de evidencia. Los códigos desconocidos devuelven un estado explícito de desconocido en lugar de tratarse silenciosamente como una categoría confirmada. Un umbral como `Param_Tol_Deduct` puede colocar las deducciones marcadas que califican en un grupo de revisión prioritaria.

</details>

### Escenario de Ejemplo

Lo siguiente es un **cálculo ilustrativo**, no una afirmación sobre una transacción de cliente probada.

Suponga que un SKU tiene estas entradas por unidad:

| Concepto | Monto |
|---|---:|
| Precio unitario FOB | US$10.00 |
| Tipo de cambio presupuestado | A$1.50 por US$1 |
| Flete estimado por unidad | A$1.20 |
| Otros costos en destino estimados por unidad | A$0.60 |
| Tasa de arancel estimada | 5% |
| Flete real por unidad | A$1.60 |
| Arancel real por unidad (según registros de despacho) | A$0.85 |
| Puerto/transporte local real por unidad | A$0.90 |
| Tipo de cambio real | A$1.55 por US$1 |
| Cantidad recibida | 1,000 unidades |

Con el tipo de cambio presupuestado, la línea base FOB es A$15.00 por unidad. Con una tasa de arancel del 5% sobre esa base FOB, el arancel estimado es A$0.75. El costo en destino estimado es, por lo tanto, A$17.55 por unidad. Si el FOB real sigue siendo US$10.00, su conversión a A$1.55 da A$15.50; sumando flete, arancel y puerto/transporte locales reales se obtiene A$18.85 por unidad.

La diferencia indicativa es de A$1.30 por unidad, o A$1,300 en 1,000 unidades. Esto es suficiente para superar un umbral de variación absoluto de ejemplo de A$500, por lo que el lote debe investigarse. El movimiento cambiario aporta A$0.50 por unidad bajo estos supuestos; el flete es A$0.40 sobre la estimación, el arancel A$0.10 sobre el monto estimado y el puerto/transporte local A$0.30 sobre la estimación. Esos componentes suman A$1.30 por unidad.

La recomendación práctica es verificar la valoración aduanera y la base arancelaria, conciliar la factura de flete y los cargos locales, y confirmar si la cantidad recibida es el denominador correcto de asignación. Solo después de que el puente de costos concilie debe decidir el equipo si repreciar, actualizar estimaciones futuras o impugnar un cargo de proveedor o logístico.

### Referencia de Fórmulas

<details>
<summary>Controles de FX y señalización de riesgo</summary>

**Propósito:** Comparar las tasas de conversión presupuestadas y reales y señalar los movimientos que exceden la tolerancia configurada.

```excel
=D15:D20-C15:C20
```

El diseño calcula el movimiento porcentual relativo a la tasa presupuestada y lo compara con `Param_Tol_Pct`. Verifique si la tasa presupuestada es cero o está en blanco antes de usar un cálculo porcentual; una implementación de producción debería devolver un estado de validación claro en lugar de un resultado de división por cero sin explicación.

</details>

<details>
<summary>Validación de fuentes y listas dinámicas</summary>

**Propósito:** Identificar filas de entrada incompletas o inválidas y mantener las listas desplegables sincronizadas con los mapeos.

```excel
=SORT(UNIQUE(FILTER(A15:A20,A15:A20<>"")))
```

El diseño también usa `FILTER` para seleccionar registros poblados, `UNIQUE` para construir listas distintas, `TRIM`/`UPPER` para normalizar claves de búsqueda y `XLOOKUP` para recuperar valores mapeados. Los rangos de derrame de matriz dinámica deben permanecer despejados.

</details>

<details>
<summary>Puente de margen gerencial</summary>

**Propósito:** Mostrar cómo cambia el margen nominal a medida que se incorporan la variación del costo en destino y las deducciones de minoristas.

```text
Net sales = gross billed revenue − contractual rebates
Book gross margin = net sales − standard landed cost
Realized margin = book gross margin − landed-cost variance
Net effective profit = realized margin − non-rebate deductions
Net effective margin = net effective profit ÷ net sales
Margin erosion = book gross margin rate − net effective margin rate
```

La especificación del libro agrupa las categorías de deducción que no son `REB` como deducciones que no son rebates en su lógica de resumen. Esa clasificación debe revisarse contra el diccionario comercial real antes de tratar el resultado como un margen contable final.

</details>

### Reglas de Validación

| Campo o área | Regla | Comportamiento esperado cuando es inválido |
|---|---|---|
| Número de OC y SKU | Identificadores obligatorios; usar formato de texto consistente | Señalar registros incompletos; no asumir que una fila sin coincidencia está conciliada |
| Cantidad de OC y cantidad recibida | Deben ser positivas para las asignaciones por unidad | Investigar cantidades cero o negativas antes de interpretar costos unitarios |
| Código de moneda | Debe coincidir con una moneda configurada en `Table_FX` | Revisar la moneda no mapeada; no depender de una tasa de respaldo |
| Tipos de cambio presupuestado y real | Deben ser numéricos y válidos para el período | Corregir la tasa y reverificar los cálculos dependientes |
| Tasa de arancel y mapeo HS/categoría | Debe coincidir con los bienes aplicables y el tratamiento aduanero | Verificar la clasificación y la elegibilidad arancelaria/FTA aplicable |
| Vínculo OC-logística | La referencia de OC debe coincidir con la clave de OC fuente | Resolver registros sin coincidencia o duplicados antes de comparar costos |
| Minorista + código de deducción en bruto | Debe mapear a una categoría interna revisada | Mantener `CLAIM-UNKNOWN` / revisión pendiente visible y actualizar el diccionario |
| Indicador de recuperabilidad | Debe ser revisado; los valores `Y`, `N` o pendientes tienen significados distintos | No equiparar un indicador con un derecho legal de recuperación |
| Rangos de salida de matriz dinámica | Las celdas de derrame deben estar vacías y no sobrescritas manualmente | Despejar las celdas que obstruyen si aparece `#SPILL!` |
| Conciliación de variaciones | El residuo debe conciliar a cero dentro de la política de redondeo definida | Investigar costos faltantes, bases inconsistentes o asignaciones incorrectas |
| Cálculos de margen | Las ventas netas deben ser distintas de cero para tasas de margen significativas | Devolver un blanco/cero controlado o una advertencia en lugar de interpretar un resultado con denominador cero |

### Requisitos de Operación y Límites Conocidos

- **Versión de Excel:** Se requiere Microsoft 365 o Excel 2021+ para funciones como `FILTER`, `XLOOKUP`, `SORT`, `UNIQUE`, `LET`, `HSTACK`, `BYROW`, `LAMBDA` y `CHOOSEROWS`. Las versiones anteriores de Excel pueden mostrar errores `_xlfn.` o no calcular el modelo.
- **Sin dependencia de VBA:** El diseño del libro está basado en fórmulas y no requiere macros VBA.
- **Escala de datos:** El manual fuente recomienda mantener las filas de OC en torno a 10,000 por período de reporte y los registros de logística/deducciones en torno a 50,000. Describe 100,000 filas como límite superior de compatibilidad, con archivos de período separados recomendados más allá de esa escala. El rendimiento real depende de la implementación del libro y del hardware.
- **Manejo de entradas:** Pegue los valores en las áreas designadas de datos fuente. No sobrescriba las salidas de fórmulas ni obstruya los rangos de derrame de matriz dinámica.
- **Colaboración:** Para importaciones grandes, use un solo editor a la vez y guarde después de validar para reducir conflictos de edición concurrente.
- **Enfoque australiano:** El modelo está diseñado en torno a compras ultramarinas, flete marítimo, despacho de importación australiano y distribución minorista australiana. La valoración arancelaria, la clasificación arancelaria, la elegibilidad FTA, el tratamiento del GST y otros requisitos fiscales/aduaneros deben confirmarse para la transacción real. Adapte el modelo antes de usarlo en jurisdicciones con bases de valoración o fiscales diferentes.
- **Límite de apoyo a decisiones:** PCRA no reemplaza los registros contables, un ERP, asesoría aduanera, asesoría fiscal ni procedimientos formales de disputa con minoristas. No verifica de forma independiente la evidencia ni garantiza la recuperación.

### Solución de Problemas

| Síntoma | Causa probable | Primera respuesta |
|---|---|---|
| `#SPILL!` | Un valor o nota bloquea el rango de salida de matriz dinámica | Despejar la celda obstructora sin eliminar el ancla de la fórmula |
| Los cambios no se recalculan | El modo de cálculo de Excel está en Manual | Cambiar el cálculo a Automático o presionar `F9` |
| `CLAIM-UNKNOWN` o `#N/A` | El par minorista/código falta en la tabla de mapeo | Agregar y revisar el nuevo mapeo en `01_Rules_Mapping` |
| `####` en celdas de montos | El ancho de columna es demasiado estrecho | Ajustar automáticamente el ancho de la columna |
| Residuo de variación distinto de cero | Cargo faltante, discrepancia de cantidades o base de asignación inconsistente | Revisar facturas fuente, cantidad recibida y cada componente de variación |

</details>

## Lógica de Negocio y Metodología

PCRA combina **reconstrucción del costo en destino, análisis de variaciones, asignación de costos unitarios, clasificación de deducciones y análisis de puente de margen**. Cada método aborda un modo de falla diferente.

La reconstrucción del costo en destino establece una línea base comparable a partir de los componentes de costos de compra e importación, en lugar de tratar una cifra histórica de hoja de cálculo como autoritaria. La asignación de costos unitarios hace comparables los cargos a nivel de embarque con la economía a nivel de producto, siempre que la cantidad de asignación y la base de costos sean apropiadas. El análisis de variaciones convierte entonces un único sobrecosto en una investigación estructurada a través de los impulsores representados en los datos fuente. Un residuo de conciliación actúa como control aritmético: si el total no puede explicarse por los componentes mapeados, el resultado no está listo para ser confiado.

La clasificación de deducciones agrega una capa separada de control comercial. Un rebate contractual y una multa de entrega disputada pueden ambos reducir el efectivo recibido, pero no implican la misma acción. Mapear códigos, asignar un responsable e identificar la evidencia requerida ayuda al equipo a priorizar reclamos sin asumir que cada deducción es recuperable.

Finalmente, el puente de margen conecta estos hallazgos operativos con la decisión que la gerencia realmente necesita tomar: si un producto sigue siendo comercialmente viable después de los costos en destino reales y las deducciones de minoristas. Estos cálculos respaldan la investigación y la priorización; no reemplazan la verificación de documentos fuente, las políticas contables, la asesoría aduanera ni una evaluación legal de un reclamo minorista.

## Otras Herramientas de Esta Serie

Explore el [perfil de Theseus Workshop en GitHub](https://github.com/HyVoid) para conocer herramientas operativas ligeras basadas en Excel. Las herramientas relacionadas se enfocan en estimación de construcción, control de costos de proyectos y otras decisiones comerciales recurrentes.

## Licencia

Este proyecto está licenciado bajo la **Apache License 2.0**. Consulte el [texto de la Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) para conocer los términos de la licencia.
