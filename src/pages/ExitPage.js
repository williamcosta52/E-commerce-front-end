import styled from "styled-components";
import exit from "../assets/exit.png";

export default function ExitPage() {
	return (
		<>
			<Image>
				<img src={exit} alt="image-error" />
			</Image>
		</>
	);
}

const Image = styled.div`
	width: 100%;
	height: 100%;
	img {
		width: 1920px;
		height: 877px;
	}
`;
