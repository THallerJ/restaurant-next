"use client";
import { useState } from "react";
import { breadCrumbs } from "../../types";
import useButtonEvents from "./hooks/useButtonEvents";
import ListItem from "./components/ListItem";
import Crumb from "./components/Crumb";
import CrumbContent from "./components/CrumbContent";
import FinalCrumb from "./components/FinalCrumb";

type BreadcrumbsProps = {
  title?: string;
  finished: React.ReactNode;
  crumbs: breadCrumbs[];
  block?: boolean; // condition that, when true, blocks progressing to next crumb
  blockMessage?: string;
};

const Breadcrumbs = ({
  title,
  finished,
  crumbs,
  block,
  blockMessage,
}: BreadcrumbsProps) => {
  const [selectedCount, setSelectedCount] = useState(0);
  const { onNext, onBack, notified } = useButtonEvents(
    setSelectedCount,
    crumbs,
    block,
  );

  const crumbContentProps = {
    onBack: onBack,
    selectedCount: selectedCount,
    crumbs: crumbs,
  };

  const CrumbNode = () => (
    <Crumb>
      <CrumbContent {...crumbContentProps}>
        <button className="btn m-4" onClick={onNext}>
          Next
        </button>
      </CrumbContent>
    </Crumb>
  );

  const FinalCrumbNode = () => (
    <FinalCrumb onNext={onNext}>
      <CrumbContent {...crumbContentProps}>
        <button type="submit" className="btn m-4">
          Submit
        </button>
      </CrumbContent>
    </FinalCrumb>
  );

  return (
    <>
      {selectedCount !== crumbs.length ? (
        <>
          {title ? <h2 className="heading pb-1"> {title}</h2> : null}
          <div className="relative w-full rounded-xl border-4 border-dark bg-dark">
            <ul
              className="flex h-12 w-full justify-around bg-dark font-poppins
                text-lg font-medium uppercase text-white"
            >
              {crumbs.map((item, i) => (
                <ListItem selected={selectedCount === i} key={item.title}>
                  {item.title}
                </ListItem>
              ))}
            </ul>
            {selectedCount === crumbs.length - 1 ? (
              <FinalCrumbNode />
            ) : (
              <CrumbNode />
            )}
            {notified && blockMessage ? (
              <label className="message top-[105%]">
                {blockMessage ? blockMessage : ""}
              </label>
            ) : null}
          </div>
        </>
      ) : (
        finished
      )}
    </>
  );
};

export default Breadcrumbs;
