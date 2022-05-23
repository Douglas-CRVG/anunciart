import { Link } from "react-router-dom";
import styled from "styled-components";

const SCBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px 0;

  figure {
    height: 180px;
    width: 320px;
    box-shadow: 0 0 15px #323232;
    border-radius: 4px;
    transition: all 0.5s;
    cursor: pointer;

    figcaption {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  figure:hover {
    transform: scale(1.1, 1.1);
    box-shadow: none;
    transition: all 0.5s;
    figcaption {
      display: initial;
    }
  }
`;

const SCLink = styled(Link)`
  text-decoration: none;
`;

export { SCBox, SCLink };
