import './index.scss';

export default function SearchByName({
  searchKey,
  handleChange,
  handleFilterByName,
}) {
  return (
    <input
      className='homeheader__search homeheader__search--name'
      type='text'
      placeholder='pesquise seu quarto'
      value={searchKey}
      onChange={handleChange}
      onKeyUp={handleFilterByName}
    />
  );
}
