import './index.scss';

export default function SearchByName({
  searchKey,
  handleChange,
  handleFilterByName,
}) {
  return (
    <input
      className='searchByName'
      type='text'
      placeholder='pesquise seu quarto'
      value={searchKey}
      onChange={handleChange}
      onKeyUp={handleFilterByName}
    />
  );
}
