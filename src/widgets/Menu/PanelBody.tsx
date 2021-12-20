import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;
const RugDoc = styled.div``;
const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}

      <MenuEntry key="rugdoc" style={{ height: 100 }}>
        <RugDoc
          style={{
            backgroundImage: `url('https://skullgamefi.com/images/egg/rugdoc.png')`,
            cursor: "pointer",
            height: "100%",
            width: "100%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          role="button"
          aria-label="Hide or show expandable content"
          onClick={() => window !== null && window.open("https://rugdoc.io/project/skullgamefi/", "_target")?.focus()}
        />
      </MenuEntry>

      <MenuEntry key="wtf" style={{ height: 100 }}>
        <RugDoc
          style={{
            backgroundImage: `url('https://assets.website-files.com/6103ca66bb1e60edce7f8f2c/610d0fe185d7d721878325ae_Dark%20Background.png')`,
            cursor: "pointer",
            height: "100%",
            width: "100%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          role="button"
          aria-label="Hide or show expandable content"
          onClick={() => window !== null && window.open("https://whattofarm.io/", "_target")?.focus()}
        />
      </MenuEntry>
    </Container>
  );
};

export default PanelBody;
