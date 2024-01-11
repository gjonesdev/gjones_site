import "./index.scss";
import { Link } from "react-router-dom";

const Gallery = (props: any) => (
	<div className="gallery">
		{Object.keys(props.projects).map((project: any) => (
			<span className="item">
				<Link to={props.projects[project].path}>
					{props.projects[project].title}
					<span className="period">.</span>
				</Link>
				<span className="thumbnail">
					<Link
						className="img-overlay"
						to={props.projects[project].path}
					>
						<ul>
							{props.projects[project].tags.map((tag: any) => (
								<li>{tag}</li>
							))}
						</ul>
					</Link>
					<img src={props.projects[project].thumbnail} alt="" />
				</span>
			</span>
		))}
	</div>
);

export default Gallery;
