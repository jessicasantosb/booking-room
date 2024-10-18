export default function SearchByType({ handleChange, className }) {
  return (
    <select
      onChange={handleChange}
      className={className}
    >
      <option value='Todos'>Todos</option>
      <option value='Padrão'>Padrão</option>
      <option value='Suíte'>Suíte</option>
      <option value='Individual'>Individual</option>
    </select>
  );
}
