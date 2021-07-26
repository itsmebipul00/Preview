import './FacebookPreview.css'
import notification  from '../images/notification.jpg'
import comment from '../images/comment.jpg'
import like from '../images/like.jpg'
import share from '../images/share.jpg'
import profile from '../images/batingo.jpg'

function FacebookPreview({text}){
    return(
        <>
        <article class="article2">
            <div class="post">
                <div><img class="profile" src={profile} /></div>
    
                <aside id="aside0">
                    <div class="donald">Batingo11</div>
                    <div class="notification">
                        <div class="hour">0h.</div>
                        <div><img id="notify" src={notification} /></div>
                    </div>
                </aside>
                <div class="updated"></div>
                <p class="ellipse">...</p>
            </div>
    
            <div class="pix">
            <textarea rows="1" cols="65" className="content" value={text}></textarea>
            </div>
            <div class="result">
            </div>
    
            <div class="action">
                <div class="border">
                    <div class="like" onclick="className='click like';" ondblclick="className='dblclick like';"><img
                            id="like" src={like} /><span id="span"> Like</span></div>
                    <div class="comment"><img id="comment" src={comment} /><span id="span"> Comment</span></div>
                    <div class="share"><img id="share" src={share} /><span id="span"> Share</span></div>
                </div>
            </div>
            <br></br>
            </article>
    </>
    )
}

export default FacebookPreview