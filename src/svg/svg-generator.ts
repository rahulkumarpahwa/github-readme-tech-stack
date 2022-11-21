import Card from "../cards/card";
import { Badge } from "../cards/types";
import { badgeWidth } from "../utils/badge-width";
import { formatHexColor } from "../utils/hex-color";

export default class SvgGenerator {
  private width: number;
  private height: number;
  private card: Card;

  public constructor(card: Card) {
    this.card = card;
    this.width = 495;
    this.height = 100;
  }

  /**
   * Generates the SVG card from the Card
   * variable passed in the constructor.
   *
   * @returns {string} The generated raw SVG.
   */
  public toString = (): string => {
    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        aria-label="My Tech Stack"
      >
        <title>${this.card.getTitle()}</title>

        <rect
          x="0.5"
          y="0.5"
          rx="4.5"
          height="${this.height - 1}"
          stroke="${this.card.getTheme().borderColor}"
          width="${this.width - 1}"
          fill="${this.card.getTheme().backgroundColor}"
          stroke-opacity="1"
        />

        <g transform="translate(25, 35)">
          <text x="0" y="0" class="header">${this.card.getTitle()}</text>
        </g>

        ${this.createLine(this.card.getBadges())}

        <style>
          .header {
            font: 600 18px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            fill: ${this.card.getTheme().titleColor};
          }
        </style>
      </svg>`;
  };

  private createLine = (badges: Badge[]): string => {
    let line: string = `<g transform="translate(25, 35)">`;
    let leftPadding = 0;

    for (const badge of badges) {
      line += this.createBadge(badge, leftPadding);
      leftPadding += 10 + badgeWidth(badge.label);
    }

    line += "</g>";
    return line;
  };

  private createBadge = (badge: Badge, leftPadding: number): string => {
    const badgeColor: string = formatHexColor(this.card.getTheme().badgeColor);

    return `
      <image 
        x="0" 
        y="15" 
        transform="translate(${leftPadding}, 0)"
        xlink:href="https://img.shields.io/badge/${
          badge.label
        }-${badgeColor}.svg?style=for-the-badge&amp;logo=${
      badge.logoName
    }&amp;logoColor=${formatHexColor(badge.logoColor)}&amp;logoWidth=16" 
      />
    `;
  };
}
