
            // 1. set addevent handler in button:
            document.getElementById("delete-btn").addEventListener('click', function()
            {
                document.getElementById("info-delete-heading").style.display="none";
            })
            
            // 2. focus:
            document.getElementById("delete-btn").addEventListener('focus', function()
            {
                document.body.style.backgroundColor="lightcoral";
            })
            // 3. remove focus or/ blur:
            document.getElementById("delete-btn").addEventListener('blur', function()
            {
                document.body.style.backgroundColor="white";
            })
            
            // 4. keydown
            // document.getElementById("delete-confirm").addEventListener('keydown', function()
            // {
            //     const deleteField=document.getElementById("delete-confirm");
            //     console.log(deleteField.value);
            // })
            //----------------------------------------------------------------------------------
            // 5. keypress:
            // document.getElementById("delete-confirm").addEventListener('keypress', function()
            // {
            //     const deleteField=document.getElementById("delete-confirm");
            //     console.log(deleteField.value);
            // })
            //--------------------------------------------------------------------------------------
            // 8. After  type specific word/data/info, eneble delete button:
            
            document.getElementById("delete-confirm").addEventListener('keyup', function(event)
            {
                const deleteBtn=document.getElementById("delete-btn");
                if(event.target.value =='delete'){
                    deleteBtn.removeAttribute("disabled");
                    
                }
                else{
                    deleteBtn.setAttribute('disabled', true ) ;
                }
                
            }
            )
            //-------------------------------------------------------------------------------------
            //6. keyup:
            // document.getElementById("delete-confirm").addEventListener('keyup', function()
            // {
            //     const deleteField=document.getElementById("delete-confirm");
            //     console.log(deleteField.value);
            // })
            
            //---------------------------------------------------------------------------------------
            // 7. change(copy pest info will be display):
            document.getElementById("delete-confirm").addEventListener('change', function()
            {
                const deleteField=document.getElementById("delete-confirm");
                console.log(deleteField.value);
            })            