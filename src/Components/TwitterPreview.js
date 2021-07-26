import './TwitterPreview.css'
import profile from '../images/batingo.jpg'


function TwitterPreview({text}){
    return(
        <div className="App">
            <div class="layout__main">
                <div class="tweet">
                    <img
                    class="tweet__author-logo"
                    src={profile}
                    />
                    <div class="tweet__main">
                        <div class="tweet__header">
                            <div class="tweet__author-name">Batingo11</div>
                            <div class="tweet__author-slug">@batingo11</div>
                            <div class="tweet__publish-time">  0m</div>
                        </div>
                        <div class="tweet__content">
                            <textarea rows="8" cols="40" className="content" value={text}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwitterPreview