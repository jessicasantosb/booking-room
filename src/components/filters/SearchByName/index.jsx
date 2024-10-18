export default function SearchByName({
  searchKey,
  handleChange,
  handleFilterByName,
  className,
}) {
  return (
    <input
      className={className}
      type='text'
      placeholder='pesquise seu quarto'
      value={searchKey}
      onChange={handleChange}
      onKeyUp={handleFilterByName}
    />
  );
}
