import styled from "styled-components";



export const StyledContainer = styled.section`
margin: 20px auto;
width: 90vw;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
background-color: orange;
border-radius: 5px;
`
export const StyledCard = styled.div`
width: 300px;
height: 400px;
border: 1px solid black;
border-radius: 5px;
overflow: hidden;
padding: 10px;
margin: 40px 20px;
background-color: white;
`

export const StyledImage = styled.img`
width: 150px;
height: 150px;
display: block;
object-fit: cover;
`
export const StyledPrice = styled.div`
margin: 10px 0px;
padding-bottom: 20px;
font-size: 18px;
line-height: 30px;
`

export const StyledButton = styled.button`
font-weight: 700;
font-size: 18px;
border-radius: 5px;
border: none;
outline: none;
background-color: black;
color: white;
width: 100%;
height: 40px;
display: block;
cursor: pointer;
text-transform: uppercase;
margin: 15px auto;
:hover {
    background-color: green;
}
`
