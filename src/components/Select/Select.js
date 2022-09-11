import { Label, FormSelect, Error } from '@/assets/style'

export default function Select({options, label, name, id, onChange, error, value}) {
  options = [{value: '', text: 'Selecciona una opción'}, ...options]
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <FormSelect name={name} id={id} onChange={onChange} error={!!error} value={value}>
        {
        options.map(
          ({value, text}, i) =>
            <option key={`${id}-${value}`} value={value}>{text}</option>
        )}
      </FormSelect>
      <Error display={error} >{error}</Error>
    </>
  );
}