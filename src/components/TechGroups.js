import { BackEndTechGroup, FrontEndTechGroup, OtherTechGroup } from "./TechGroup";

const TechGroups = () => {
    return (
        <div className="grid grid-cols-1 gap-20 xs:grid-cols-3 xs:gap-5 w-fit">
            <FrontEndTechGroup />
            <BackEndTechGroup />
            <OtherTechGroup />
        </div>
    );
}

export default TechGroups;