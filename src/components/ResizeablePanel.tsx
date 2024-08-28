import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}

const ResizeablePanel = ({
  defaultLayout = [23, 77],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
    //   autoSaveId="condition"
    >
      {showLeftPanel && (
        <>
          <Panel
            defaultSize={defaultLayout[0]}
            className="bg-[#1b1b1be8] panel-left"
            collapsible={true}
            collapsedSize={18}
            minSize={18}
          >
            {leftPanel}
          </Panel>
          <PanelResizeHandle className="border-r border-[#6b6b6b] border-b-[1px]" />
        </>
      )}

      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};

export default ResizeablePanel;
