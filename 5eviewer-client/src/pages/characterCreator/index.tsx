import { useState } from "react";
import { SelectedClass } from "../../types/Class";
import { ClassSelector } from "../../components/classSelector";

export const CharacterCreator = () => {
	const [selectedClass, setSelectedClass] = useState<SelectedClass>({ class: '', source: '' });

	const handleClassSelection = (data:any) => {
		console.log(data);
		setSelectedClass(data)
	}
	return <>
		<ClassSelector selectedClass={handleClassSelection} />
	</>
}
