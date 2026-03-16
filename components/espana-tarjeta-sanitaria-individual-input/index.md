# Espana Tarjeta Sanitaria Individual Input

EspanaTarjetaSanitariaIndividualInput is a headless input for entering a España Tarjeta Sanitaria Individual (TSI), the unique national healthcare identifier also known as CIP-SNS. It renders as `<input type="text">` with autocomplete disabled to protect sensitive health data. It is the editable companion to EspanaTarjetaSanitariaIndividualView.

## Implementation Notes

- Renders as `<input type="text">` with `autocomplete="off"`
- Supports two-way binding on the `value` prop
- Companion to EspanaTarjetaSanitariaIndividualView

## Props

- `label`: string (required) -- accessible label via `aria-label`
- `value`: string (default: "") -- bindable input value
- `required`: boolean (default: false) -- form validation
- `disabled`: boolean (default: false) -- disabled state
- `...restProps`: any -- additional HTML attributes spread onto the `<input>`

## Usage

```html
<EspanaTarjetaSanitariaIndividualInput label="TSI" value={tsi} />
```

## Keyboard Interactions

- Standard text input keyboard behavior

## ARIA

- `aria-label={label}` -- provides accessible name

## When to Use

- Use for entering a Spanish TSI / CIP-SNS healthcare identifier.
- Use EspanaTarjetaSanitariaIndividualView for read-only display.

## Headless

This headless component provides a bare `<input type="text">` with `aria-label` and `autocomplete="off"`. The consumer provides all styling.

## Styles

The consumer provides all CSS styling. The component renders with a `.espana-tarjeta-sanitaria-individual-input` class for targeting.

## Testing

- Verify renders an `<input>` with the correct class and type="text"
- Verify `aria-label` is set from the label prop
- Verify `autocomplete="off"`
- Verify value binding works

## Domain Knowledge

The España Tarjeta Sanitaria Individual (TSI) uses a CIP-SNS code that typically begins with 4 digits indicating the Autonomous Community region, followed by a variable mix of alphanumeric characters. The code is printed on the front of the health card, often below the barcode. To obtain the card, España citizens use their DNI (National Identity Document) and non-España citizens use their NIE (Foreigner Identification Number). A 12-digit España Social Security Number (NUSS/NAF) is also required for registration.

## References

- Ministerio de Sanidad: https://www.sanidad.gob.es/
