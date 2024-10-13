import axios from "axios";
import { useEffect, useState } from "react";
import { ClassInfo } from "../../types";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const ClassSelector = ({ selectedClass: handleParentClassSelection }: any) => {
	const [classes, setClasses] = useState([] as ClassInfo[]);
	const [selectedClassIndex, setSelectedClassIndex] = useState(-1);
	const [selectedClassSourceIndex, setSelectedClassSource] = useState(-1);

	const getInitialData = async () => {
		const classListResult = Object.values((await axios.get('https://5e.tools/data/class/index.json')).data) as string[];

		const classesResult = await getClassData(classListResult);
		setClasses(classesResult);
	}
	const getClassData = async (classList: any) => {
		const classesInfo: ClassInfo[] = [];
		for (const classSource of classList) {
			const currentClass: ClassInfo = (await axios.get('https://5e.tools/data/class/' + classSource)).data;
			classesInfo.push(currentClass);
		};
		return classesInfo;
	}
	const handleClassSelection = (e: SelectChangeEvent) => {
		const selectedArray: string[] = e.target.value.split('|');
		setSelectedClassIndex(Number(selectedArray[0]));
		setSelectedClassSource(Number(selectedArray[1]));

		handleParentClassSelection({ class: classes[Number(selectedArray[0])], source: classes[Number(selectedArray[0])].class[Number(selectedArray[1])].source });
	}

	const handleSubClassSelection = (e: SelectChangeEvent) => {
		const selectedArray: string[] = e.target.value.split('|');

		handleParentClassSelection({ class: classes[Number(selectedArray[0])], source: selectedArray[1] });
	}
	useEffect(() => {
		getInitialData();
	}, [])

	return <>
		{classes.length &&
			<>
				<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-simple-select-standard-label">Class</InputLabel>
					<Select
						labelId="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						value={selectedClassIndex ? selectedClassIndex + '|' + selectedClassSourceIndex : '-1|-1'}
						onChange={handleClassSelection}
						label="Class"
					>
						<MenuItem value="-1|-1">
							<em>None</em>
						</MenuItem>
						{
							classes.map((currentClass, i) => {
								return currentClass.class.map((classSource, sourceindex) => {
									return <MenuItem value={i + '|' + sourceindex} key={'class-' + i + '-' + sourceindex}>{classSource.name} - {classSource.source}</MenuItem>
								})

							})
						}
					</Select >
				</FormControl >

				<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-simple-select-standard-label">Subclass</InputLabel>
					<Select
						labelId="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						value={'|'}
						onChange={handleSubClassSelection}
						label="Subclass"
					>
						<MenuItem value="|">
							<em>None</em>
						</MenuItem>
						{/* { inputSelectedClass !== '|' &&
							// classes[selectedClassIndex].class[selectedClassSourceIndex].map((currentClass, i) => {
							// 	return currentClass.class.map((classSource, sourceindex) => {
							// 		return <MenuItem value={i + '|' + classSource.name + '|' + classSource.source} key={'class-' + i + '-' + sourceindex}>{classSource.name} - {classSource.source}</MenuItem>
							// 	})

							// })
						} */}
					</Select >
				</FormControl >
			</>
		}

	</>
}
