const LanguageOption = (props) => {
    return(
        <div>
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'ko'}>Korean</option>
                <option value={'chi'}>Chinese</option>
                <option value={'hi'}>Hindi</option>
                <option value={'ta'}>Tamil</option>
            </select>
        </div>
    )
}

export default LanguageOption;