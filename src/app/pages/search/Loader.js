import React from "react";

import { CircularProgress } from "@mui/material";

const Loader = (props) => {
	const indicatorSize = 100;
	return (
		<CircularProgress
			size={indicatorSize}
			sx={{
				position: "absolute",
				top: "50%",
				left: "50%",
				marginTop: `${-indicatorSize / 2}px`,
				marginLeft: `${-indicatorSize / 2}px`,
			}}
		/>
	);
};
export default Loader;