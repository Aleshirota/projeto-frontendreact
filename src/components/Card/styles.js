import styled from "styled-components"


export const CardContainer = styled.div`


  
    border-radius: 15px;
    height: 250px;
    width: 180px;
    background-color: #e1f0f7;
    padding: 5px;
    display: flex;
    justify-content: center;
   
    
    .formatarCard{
        position: relative;
    }
   
    img{
        border: 1px solid #080808;
        height: 180px;
        width: 170px;
        border-radius: 15px;
    }

button.removerItem{
    height: 28px;
    width: 28px;
    position: absolute;
    top: 0;
    right: 0;
}
    
    `