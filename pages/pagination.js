import React, { useState, useEffect, useRef } from "react";

const results1 = {
	title: "Swim Results",
	list: [
		{ name: "John Wick", country: "South Africa" },
		{ name: "John Wick", country: "South Africa" },
		{ name: "John Wick", country: "South Africa" },
		{ name: "John Wick", country: "South Africa" },
		{ name: "John Wick", country: "South Africa" },
		{ name: "David Hancock", country: "France" },
		{ name: "David Hancock", country: "France" },
		{ name: "David Hancock", country: "France" },
		{ name: "David Hancock", country: "France" },
		{ name: "David Hancock", country: "France" },
		{ name: "William King", country: "China" },
		{ name: "William King", country: "China" },
		{ name: "William King", country: "China" },
		{ name: "William King", country: "China" },
		{ name: "William King", country: "China" },
		{ name: "Kelly Day", country: "USA" },
		{ name: "Kelly Day", country: "USA" },
		{ name: "Kelly Day", country: "USA" },
		{ name: "Kelly Day", country: "USA" },
		{ name: "Kelly Day", country: "USA" },
		{ name: "Jennifer Love", country: "England" },
		{ name: "Jennifer Love", country: "England" },
		{ name: "Jennifer Love", country: "England" },
		{ name: "Jennifer Love", country: "England" },
		{ name: "Jennifer Love", country: "England" },
		{ name: "Bob Doe", country: "Chad" },
	],
};

const results2 = {
	title: "Country Statistics",
	list: [
		{ name: "Sarah Lee", country: "South Africa" },
		{ name: "Sarah Lee", country: "South Africa" },
		{ name: "Sarah Lee", country: "South Africa" },
		{ name: "Sarah Lee", country: "South Africa" },
		{ name: "Sarah Lee", country: "South Africa" },
		{ name: "Joseph Joe", country: "France" },
		{ name: "Joseph Joe", country: "France" },
		{ name: "Joseph Joe", country: "France" },
		{ name: "Joseph Joe", country: "France" },
		{ name: "Joseph Joe", country: "France" },
		{ name: "Kelly Masie", country: "China" },
		{ name: "Kelly Masie", country: "China" },
		{ name: "Kelly Masie", country: "China" },
		{ name: "Kelly Masie", country: "China" },
		{ name: "Kelly Masie", country: "China" },
		{ name: "Harold Mai", country: "USA" },
		{ name: "Harold Mai", country: "USA" },
		{ name: "Harold Mai", country: "USA" },
		{ name: "Harold Mai", country: "USA" },
		{ name: "Harold Mai", country: "USA" },
		{ name: "Jeffery", country: "England" },
		{ name: "Jeffery", country: "England" },
		{ name: "Jeffery", country: "England" },
		{ name: "Jeffery", country: "England" },
		{ name: "Jeffery", country: "England" },
		{ name: "Katie", country: "Chad" },
		{ name: "Joseph Joe", country: "France" },
		{ name: "Joseph Joe", country: "France" },
		{ name: "Joseph Joe", country: "France" },
		{ name: "Kelly Masie", country: "China" },
		{ name: "Kelly Masie", country: "China" },
		{ name: "Harold Mai", country: "USA" },
		{ name: "Jeffery", country: "England" },
		{ name: "Jeffery", country: "England" },
	],
};

export default function Testing() {
	const [isDesktop, setIsDesktop] = useState("");
	const [totalPages, setTotalPages] = useState("");
	const [pageNum, setPageNum] = useState(1);
	const [slice1, setSlice1] = useState(0);
	const [slice2, setSlice2] = useState(10);
	const [results, setResults] = useState(results1.list);
	const [activeState, setActiveState] = useState("swim-records");

	// Detect screen size
	useEffect(() => {
		function detectSize(x) {
			if (x.matches && activeState === "swim-records") {
				setIsDesktop(false);
				setPageNum(1);
				setSlice1(0);
				setSlice2(5);
				setTotalPages(Math.ceil(results.length / 5));
			} else {
				setPageNum(1);
				setIsDesktop(true);
				setSlice1(0);
				setSlice2(10);
				setTotalPages(Math.ceil(results.length / 10));
			}
		}
		const x = window.matchMedia("(max-width: 1024px)");
		detectSize(x);
		x.addListener(detectSize);
	}, [results, totalPages, isDesktop]);

	const nextFunc = () => {
		if (
			pageNum === Math.ceil(results.length / 5) ||
			(pageNum === Math.ceil(results.length / 10) && isDesktop)
		) {
			setPageNum(pageNum);
		} else if (!isDesktop && activeState === "swim-records") {
			setSlice1(slice1 + 5);
			setSlice2(slice2 + 5);
			setPageNum(pageNum + 1);
		} else {
			setSlice1(slice1 + 10);
			setSlice2(slice2 + 10);
			setPageNum(pageNum + 1);
		}
	};
	const prevFunc = () => {
		if (pageNum === 1) {
			setPageNum(pageNum);
		} else if (!isDesktop && activeState === "swim-records") {
			setSlice1(slice1 - 5);
			setSlice2(slice2 - 5);
			setPageNum(pageNum - 1);
		} else {
			setSlice1(slice1 - 10);
			setSlice2(slice2 - 10);
			setPageNum(pageNum - 1);
		}
	};
	const lastPage = () => {
		if (!isDesktop && activeState === "swim-records") {
			setPageNum(Math.ceil(results.length / 5));
			setSlice1(Math.ceil(results.length / 5) * 5 - 5);
			setSlice2(Math.ceil(results.length / 5) * 5);
		} else {
			setPageNum(Math.ceil(results.length / 10));
			setSlice1(Math.ceil(results.length / 10) * 10 - 10);
			setSlice2(Math.ceil(results.length / 10) * 10);
		}
	};
	const firstPage = () => {
		setPageNum(1);
		if (!isDesktop && activeState === "swim-records") {
			setSlice1(0);
			setSlice2(5);
		} else {
			setSlice1(0);
			setSlice2(10);
		}
	};

	// Just unnecessary styles, use class names instead
	const styles1 = {
		background: activeState === "swim-records" ? "grey" : "white",
		transform: activeState === "swim-records" ? "scale(1.2)" : "scale(1)",
		marginRight: "20px",
	};
	const styles2 = {
		background: activeState === "country-statistics" ? "grey" : "white",
		transform: activeState === "country-statistics" ? "scale(1.2)" : "scale(1)",
	};

	const swimRecords = () => {
		if (!isDesktop && activeState === "swim-records") {
			setTotalPages(Math.ceil(results.length / 5));
			setSlice1(0);
			setSlice2(5);
		} else {
			setTotalPages(Math.ceil(results.length / 10));
			setSlice1(0);
			setSlice2(10);
		}
		setActiveState("swim-records");
		setResults(results1.list);
	};

	const countryStats = () => {
		setPageNum(1);
		setSlice1(0);
		setSlice2(10);
		setTotalPages(Math.ceil(results.length / 10));
		setActiveState("country-statistics");
		setResults(results2.list);
	};

	return (
		<div className="App" style={{ marginTop: "20px" }}>
			<button style={styles1} onClick={() => swimRecords()}>
				Swim Records
			</button>
			<button style={styles2} onClick={() => countryStats()}>
				Country Statistics
			</button>
			{results.slice(slice1, slice2).map((item, index) => (
				<div style={{ border: "1px solid black" }} key={index}>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<p>
							<b>Name:&nbsp;</b>
						</p>
						<p>{item.name}</p>
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<p>
							<b>Country:&nbsp;</b>
						</p>
						<p>{item.country}</p>
					</div>
				</div>
			))}
			<div>
				<button type="button" onClick={firstPage}>
					{"<<"}
				</button>
				<button type="button" onClick={() => prevFunc()}>
					{"<"}
				</button>
				<label>
					Page {pageNum}/{totalPages}
				</label>
				<button type="button" onClick={() => nextFunc()}>
					{">"}
				</button>
				<button type="button" onClick={lastPage}>
					{">>"}
				</button>
				{/* Do not add */}
				<br />
				<br />
				<div>isDesktop:{`${isDesktop}`}</div>
				<div>totalPages:{totalPages}</div>
				<div>pageNum:{pageNum}</div>
				<div>slice1:{slice1}</div>
				<div>slice2:{slice2}</div>
				<div>arrayLength:{results.length}</div>
			</div>
		</div>
	);
}
