function label2Option(newOption){
    const newOptionName = newOption.replace(/ /g,"_").toLocaleLowerCase()
    return {name: newOptionName, label: newOption}
}
export default label2Option