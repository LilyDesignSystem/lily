# Espana Tarjeta Sanitaria Individual View

EspanaTarjetaSanitariaIndividualView is a read-only display of a España Tarjeta Sanitaria Individual (TSI), the unique national healthcare identifier also known as CIP-SNS (Código de Identificación Personal del Sistema Nacional de Salud). It renders the value as inline text inside a `<span>` with `aria-label` for accessibility. It is the display-only companion to EspanaTarjetaSanitariaIndividualInput.

## Implementation Notes

- Renders a `<span>` with `aria-label`
- Displays the value as text content
- No formatting or validation; consumer provides the value pre-formatted
- Companion to EspanaTarjetaSanitariaIndividualInput for the Input/View pattern

## Props

- `label`: string (required) -- accessible label via `aria-label`
- `value`: string (default: "") -- the TSI string to display
- `...restProps`: any -- additional HTML attributes spread onto the `<span>`

## Usage

```html
<EspanaTarjetaSanitariaIndividualView label="TSI" value="BBBB12345678" />
```

## Keyboard Interactions

- None (passive display-only component)

## ARIA

- `aria-label={label}` -- provides accessible name for the displayed identifier

## When to Use

- Use for read-only display of a Spanish TSI / CIP-SNS healthcare identifier.
- Use EspanaTarjetaSanitariaIndividualInput for editable entry.

## Headless

This headless component provides a `<span>` with `aria-label`. The consumer provides all styling.

## Styles

The consumer provides all CSS styling. The component renders with a `.espana-tarjeta-sanitaria-individual-view` class for targeting.

## Testing

- Verify renders a `<span>` with the correct class
- Verify `aria-label` is set from the label prop
- Verify value is displayed as text content

## Domain Knowledge

The España Tarjeta Sanitaria Individual (TSI) uses a CIP-SNS code that typically begins with 4 digits indicating the Autonomous Community region, followed by a variable mix of alphanumeric characters. The code is printed on the front of the health card, often below the barcode. To obtain the card, España citizens use their DNI (National Identity Document) and non-España citizens use their NIE (Foreigner Identification Number). A 12-digit España Social Security Number (NUSS/NAF) is also required for registration.

## References

- Ministerio de Sanidad: https://www.sanidad.gob.es/
