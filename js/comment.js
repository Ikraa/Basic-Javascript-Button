// 1. add button event handler:(addEventListener)
document.getElementById("submit-comment").addEventListener("click", function (){
    // 2.get user comment:
    const commentBox=document.getElementById("write-comment");
    const userComment= commentBox.value;
    
    // 3. createElement add in paragraph:
    const p=document.createElement('p');
    p.innerText=userComment;
    // 4. appendchild added the comment (to update info):
    const commentContainer=document.getElementById('container-comment');
    commentContainer.appendChild(p);
    // 5. remove data from text field after update info:
    commentBox.value =" ";
     })