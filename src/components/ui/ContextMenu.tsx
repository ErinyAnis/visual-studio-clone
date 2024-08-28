import { useEffect, useRef } from "react";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../../app/features/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ positions: { x, y }, setShowMenu }: IProps) => {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);

  const { openedFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.tree
  );

  //handlers
  const onCloseAll = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false);
  };

  const onClose = () => {
    const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
    dispatch(setOpenedFilesAction(filtered));
    setShowMenu(false);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFilesAction([]));
      dispatch(
        setClickedFileAction({
          activeTabId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenedFilesAction(filtered));
    dispatch(
      setClickedFileAction({
        activeTabId: id,
        fileContent: content,
        fileName: name,
      })
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  return (
    <div ref={menuRef}>
      <ul
        className="text-gray-700 bg-white w-fit rounded-md text-sm"
        style={{ position: "absolute", left: x, top: y }}
      >
        <li
          className="cursor-pointer block hover:bg-gray-300 duration-300 py-[10px] px-7 rounded-t-md border-[1px] border-b-gray-400"
          role="menuitem"
          onClick={onClose}
        >
          Close
        </li>
        <li
          onClick={onCloseAll}
          className="cursor-pointer block py-[10px] hover:bg-gray-300 px-7 rounded-b-md"
          role="menuitem"
        >
          Close all
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;

// useEffect
// click event
// Menu refrence => useRef (done)
