import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ClassInfo, SelectedClass, Source } from "../../types";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const ClassSelector = (selectedClass: SelectedClass) => {
	// const [classes, setClasses] = useState([] as ClassInfo[]);
	// // const [selectedClass, setSelectedClass] = useState<SelectedClass>({ class: '', source: '' });

	// const getInitialData = async () => {
	// 	const classListResult = Object.values((await axios.get('https://5e.tools/data/class/index.json')).data) as string[];

	// 	const classesResult = await getClassData(classListResult);
	// 	setClasses(classesResult);
	// }
	// const getClassData = async (classList: any) => {
	// 	const classesInfo: ClassInfo[] = [];
	// 	for (const classSource of classList) {
	// 		const currentClass: ClassInfo = (await axios.get('https://5e.tools/data/class/' + classSource)).data;
	// 		classesInfo.push(currentClass);
	// 	};
	// 	return classesInfo;
	// }
	// const handleClassSelection = (e: SelectChangeEvent) => {
	// 	const selectedArray: string[] = e.target.value.split('|');
	// 	this.props.selectedClass = ({ class: selectedArray[0], source: selectedArray[1] as Source });
	// }
	// useEffect(() => {
	// 	getInitialData();
	// }, [])

	// useCallback()
	return <>
		{/* {classes.length &&
			<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-standard-label">Class</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={selectedClass.class + '|' + selectedClass.source}
					onChange={handleClassSelection}
					label="Class"
				>
					<MenuItem value="|">
						<em>None</em>
					</MenuItem>
					{
						classes.map((currentClass, i) => {
							return currentClass.class.map((classSource, sourceindex) => {
								return <MenuItem value={classSource.name + '|' + classSource.source} key={'class-' + i + '-' + sourceindex}>{classSource.name} - {classSource.source}</MenuItem>
							})

						})
					}
				</Select >
			</FormControl >
		} */}

	</>
}
