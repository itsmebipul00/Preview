function Buttons({handleClick}){
    return(
        <div>
            <button value='twitter'onClick={handleClick}>Twitter</button>
            <button value='facebook' onClick={handleClick}>Facebook</button>
            <button value='all' onClick={handleClick}>Preview All</button>
            <button value='reset' onClick={handleClick}>Reset</button>
        </div>
    )
}

export default Buttons