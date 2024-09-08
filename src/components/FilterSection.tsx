function FilterSection () {
  return (
    <div className="mb-8">
      <input type="text" placeholder="Rechercher..." className="bg-[#1b3a4f] p-3 border rounded-[10px]" />
      <select className="bg-[#1b3a4f] p-2 border rounded-[10px] p-3 ml-4">
        <option>Dernière semaine</option>
        <option>Dernier mois</option>
        <option>Dernière année</option>
      </select>
    </div>
  );
}

export default FilterSection;
