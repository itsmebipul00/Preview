 function Textarea({text, setText}) {
    return(
        <div className="textarea">
            <form>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="8"
                cols="55"
                maxLength="280"
            ></textarea>
            </form>
            {/* {text} */}
        </div>
    )
}
export default Textarea