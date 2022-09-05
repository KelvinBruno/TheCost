import styled from "styled-components";
export const Load = styled.div`
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to { 
            transform: rotate(360deg);
        }
    }
    

    @-webkit-keyframes rotate {
        from {
            -webkit-transform: rotate(0deg);
        }
        to { 
            -webkit-transform: rotate(360deg);
        }
    }

	width: 20px;
	height: 20px;
	border: solid 4px #ffffff;
	border-radius: 20px;
	border-right-color: transparent;
	border-bottom-color: transparent;
	 -webkit-transition: all 0.5s ease-in;
    -webkit-animation-name:             rotate; 
    -webkit-animation-duration:         1.0s; 
    -webkit-animation-iteration-count:  infinite;
    -webkit-animation-timing-function: linear;
    	
    transition: all 0.5s ease-in;
    animation-name:             rotate; 
    animation-duration:         1.0s; 
    animation-iteration-count:  infinite;
    animation-timing-function: linear; 
`

export const Screen = styled.div`
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: var(--blue-2);
  
  img{
    position: sticky;
    width: 35vmin;
    height: 20vmin;
    pointer-events: none;
    max-width: 38%;
  }
`