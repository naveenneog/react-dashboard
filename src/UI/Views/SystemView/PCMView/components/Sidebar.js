import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
//
import ClickOutside from 'components/ClickOutside'

const breakpoint = 800
const sidebarBackground = '#f7f7f7'

const menuItems = [
  {
    title: 'Line Chart',
    path: 'line'
  },
  {
    title: 'Bubble Chart',
    path: 'bubble'
  },
  {
    title: 'Area Chart',
    path: 'area'
  },
  {
    title: 'Bar Chart',
    path: 'bar'
  },
  {
    title: 'Column Chart',
    path: 'column'
  },
  {
    title: 'Animated',
    path: 'animated'
  },
  {
    title: 'Axis Options',
    path: 'axis-options'
  },
  {
    title: 'Custom Styles',
    path: 'custom-styles'
  },
  {
    title: 'Custom Tooltip',
    path: 'custom-tooltip'
  },
  {
    title: 'Cursors',
    path: 'cursors'
  },
  {
    title: 'Synced Cursors',
    path: 'synced-cursors'
  },
  {
    title: 'Brushing',
    path: 'brushing'
  },
  {
    title: 'Custom Cursors',
    path: 'custom-cursors'
  },
  {
    title: 'Grouping Modes',
    path: 'grouping-modes'
  },
  {
    title: 'Tooltip Options',
    path: 'tooltip-options'
  },
  {
    title: 'Dynamic Parent',
    path: 'dynamic-parent'
  },
  {
    title: 'Sparklines',
    path: 'sparklines'
  },
  {
    title: 'Mixed Types',
    path: 'mixed-types'
  },
  {
    title: 'Multiple Axes',
    path: 'multiple-axes'
  },
  {
    title: 'Dark Mode',
    path: 'dark-mode'
  },
  {
    title: 'Stress Test',
    path: 'stress-test'
  }
]

const SidebarStyles = styled('div')`
  position: relative;
  width: 100%;
  max-width: 100%;
  padding-left: 300px;
  margin: 0 auto;
  @media screen and (max-width: ${breakpoint}px) {
    padding-left: 0px;
  }
  .sidebar {
    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    max-width: calc(100% - 45px);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    -webkit-overflow-scrolling: touch;
    background: ${sidebarBackground};
    @media screen and (max-width: ${breakpoint}px) {
      transform: translateX(-100%);
      ${props =>
        props.isOpen &&
        css`
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
          transform: translateX(0%);
        `};
    }
    .toggle {
      appearance: none;
      position: absolute;
      top: 5px;
      right: -6px;
      transform: translateX(100%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: ${sidebarBackground};
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: #555;
      font-size: 1.2rem;
      border-radius: 3px;
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s ease-out;
      transform-origin: center;
      outline: none;
      @media screen and (max-width: ${breakpoint}px) {
        opacity: 1;
        pointer-events: all;
      }
      ${props =>
        !props.isOpen &&
        css`
          transform: translateX(100%) rotate(180deg);
        `};
    }
    .header {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0.7rem;
      border-bottom: 3px solid rgba(0, 0, 0, 0.1);
      .link {
        font-weight: bold;
      }
      .version {
        font-size: 0.9rem;
        font-weight: bold;
        opacity: 0.3;
      }
    }
    .scroll {
      flex: 1 1 auto;
      overflow-y: auto;
      padding-bottom: 5rem;
    }
    .list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      .list {
        padding-left: 1rem;
      }
    }
    .item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      .title,
      a {
        display: block;
        padding: 0.5rem 0.7rem;
      }
      a {
        color: rgba(0, 0, 0, 0.8);
        &.active {
          font-weight: bold;
        }
      }
      .title {
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .content {
    position: relative;
    z-index: 0;
    padding: 1rem 2.5rem;
  }
`

const Menu = ({ items }) => (
  <div className="list">
    {items.map(({ title, path }) => (
      <div key={path} className="item">
        <Link href={`/examples/${path}`}><a>
        {title}
        </a>
        </Link>
      </div>
    ))}
  </div>
)

export default function Sidebar ({ children }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(old => !old)

  return (
    <SidebarStyles className="sidebar" isOpen={isOpen}>
      <ClickOutside
        onClickOutside={
          isOpen
            ? () => {
                this.setState({
                  isOpen: false
                })
              }
            : undefined
        }
      >
        <div className="sidebar">
          <button
            className="toggle"
            onClick={toggle}
          >
            ⇤
          </button>
          <div className="header">
            <span className="link">
              <a href="https://github.com/react-tools/react-charts">
                React Charts
              </a>
            </span>
            <div className="version" />
          </div>
          <div className="scroll">
            <Menu items={menuItems} />
          </div>
        </div>
      </ClickOutside>
      <div className="content">{children}</div>
    </SidebarStyles>
  )
}