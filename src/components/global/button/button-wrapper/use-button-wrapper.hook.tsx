import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';

export default function useButtonWrapper() {
  const findOutWhatHierarchyToSet: Record<ButtonHierarchy, string> = {
    [ButtonHierarchy.Filled]: 'text-gray-950 bg-cyan-400 hover:bg-cyan-600',
    [ButtonHierarchy.Outlined]:
      'text-cyan-400 border border-cyan-400 hover:bg-cyan-400/10',
    [ButtonHierarchy.Ghosted]:
      'text-cyan-400 border-cyan-400 hover:bg-cyan-400/10',
  };

  return {
    findOutWhatHierarchyToSet,
  };
}
