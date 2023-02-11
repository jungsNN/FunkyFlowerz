import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { ClickOutside } from "../utils/useClickOutside";
import { Grid } from "../shared";
import { MoreIcon } from "../svgs";

interface DropdownProps {
  name: string;
  children?: React.ReactNode;
  background?: string;
  borderColor?: string;
  isSmall?: boolean;
  menuItems?: React.ReactNode[];
}
export default function Dropdown(props: DropdownProps) {
  const { children, menuItems, name, isSmall, ...styles } = props;
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleDrawer = useCallback(
    (open: boolean) => {
      setIsOpen(open);
    },
    [setIsOpen]
  );

  return (
    <ClickOutside onClick={() => (isOpen ? onToggleDrawer(false) : {})}>
      <DropdownContainer ref={toggleRef} isSmall={isSmall ?? true} {...styles}>
        <button className="dropdown-menu">
          <div
            className="toggle-action"
            onClick={() => {
              console.log({ isOpen });
              onToggleDrawer(!isOpen);
            }}
          >
            <MoreIcon variant="rounded-filled" />
          </div>
          {menuItems ? (
            <ul>
              <VertMenu display="grid" gridAutoFlow="row">
                {menuItems!.map((menu: React.ReactNode, i: number) => (
                  <li
                    key={
                      (menu as React.ReactElement).key ??
                      `${name}-menu-item-${i}`
                    }
                  >
                    {menu}
                  </li>
                ))}
              </VertMenu>
            </ul>
          ) : (
            children ?? <></>
          )}
        </button>
      </DropdownContainer>
    </ClickOutside>
  );
}

const DropdownContainer = styled.div<{
  background?: string | undefined;
  borderColor?: string | undefined;
  isSmall: boolean;
}>`
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 4;

  .dropdown-menu {
    z-index: 5;
    align-items: center;
    background: transparent;
    border: 4px solid transparent;
    border-radius: calc(100vw * (20 / 1512));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    transform: translateY(40px);
    width: 100%;

    transition: all 0.2s ease-in;
    height: 0px;

    .toggle-action {
      cursor: pointer;
      border-radius: 50%;
      overflow: visible;
      text-align: middle;
      whitespace: nowrap;
      transform: translateY(-40px);
      transition: all 0.1s ease-in;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      z-index: 10;

      svg {
        height: calc(100vw * (40 / 1512));
        width: calc(100vw * (40 / 1512));
        opacity: 1;
        transition: all 0.1s ease-in;

        .rounded-filled-circle {
          transition: all 0.1s ease-in;
          fill: #292929;
        }

        .dot-rect {
          transition: all 0.1s ease-in;
          stroke: ${(props) => props.theme.colors.pink};
        }
      }

      &:hover {
        transition: all 0.1s ease-in;
        svg {
          opacity: 1;
          .rounded-filled-circle {
            transition: all 0.1s ease-in;
            fill: ${(props) => props.theme.colors.pink};
          }

          .dot-rect {
            transition: all 0.1s ease-in;
            stroke: ${(props) => props.theme.colors.textPrimary};
          }
        }
      }
    }

    ul {
      height: auto;
      max-height: 0%;
      overflow: hidden;
      text-align: left;
      whitespace: nowrap;
      transition: all 0.1s ease-in;
    }

    &:focus {
      background: ${(props) => props.background ?? props.theme.colors.bg};
      border: 4px solid
        ${(props) => props.borderColor ?? props.theme.colors.border};
      height: 300px;
      transition: all 0.2s ease-in;

      .toggle-action {
        svg {
          transition: all 0.1s ease-in;
          opacity: 1;
          .rounded-filled-circle {
            transition: all 0.1s ease-in;
            fill: ${(props) => props.theme.colors.pink};
          }

          .dot-rect {
            transition: all 0.1s ease-in;
            stroke: ${(props) => props.theme.colors.textPrimary};
          }
        }
      }

      ul {
        max-height: 100%;
        transition: all 0.3s ease-in;
      }
    }
  }
`;

const VertMenu = styled(Grid)`
  li {
    list-style: none;
    padding-top: calc(100vw * (24 / 1512));
    padding-bottom: calc(100vw * (24 / 1512));
    text-align: left;
  }
`;
