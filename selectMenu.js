export default function countrySelectMenu(countryList) {
  const countrySelect = document.getElementById("countrySelect");
  var fragment = document.createDocumentFragment(); //this fragment wiill add directly under the select

  countryList.forEach(({ Key, EnglishName }) => {
    const option = document.createElement("option");
    option.value = Key;
    option.text = EnglishName;
    fragment.appendChild(option);
  });
  countrySelect.appendChild(fragment);
}
