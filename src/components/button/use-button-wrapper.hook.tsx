import {ButtonHierarchy} from "@/enum/button-hierarchy.enum";

export default function useButtonWrapper() {

  const findOutWhatHierarchyToSet: Record<ButtonHierarchy, string>  = {
    [ButtonHierarchy.Filled]: "",
    [ButtonHierarchy.Outlined]: "outlined",
    [ButtonHierarchy.Ghosted]: "text-cyan-400 border-cyan-400 w-auto hover:bg-cyan-400/10 transition-colors duration-300"
  }

  return {
    findOutWhatHierarchyToSet
  }

}