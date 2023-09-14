const masonryItems = [
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(8).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(11).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(7).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(10).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(1).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(4).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(6).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(8).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(11).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(7).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(10).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(1).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(4).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(6).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(8).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(11).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(7).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(10).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(1).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(4).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(6).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(8).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(11).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(7).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(10).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(1).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(4).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(6).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(5).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(3).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(9).fill("there will be subsections"),
  },
  {
    title: "Categories",
    spans: Array(2).fill("there will be subsections"),
  },
];
function GamePrototype() {
  this.columnHeights = [];
}

GamePrototype.prototype.render = function (containerClass, settings) {
  const container = document.querySelector(containerClass);

  const columnWidth = settings.columnWidth;
  const columnHeight = settings.columnHeight;
  const autoResize = settings.autoResize || false;
  const gap = 3;

  const createMasonryItem = (itemData) => {
    const item = document.createElement("div");
    item.className = "masonry-item";
    item.innerHTML = `<h2>${itemData.title}</h2>`;
    itemData.spans.forEach((span) => {
      const spanElement = document.createElement("span");
      spanElement.textContent = span;
      item.appendChild(spanElement);
    });
    return item;
  };

  masonryItems.forEach((itemData) => {
    const item = createMasonryItem(itemData);
    container.appendChild(item);
  });

  const positionItems = () => {
    const containerWidth = container.offsetWidth;

    const columns = Math.floor(containerWidth / (columnWidth + gap));
    const paddingInline = autoResize
      ? 0
      : (containerWidth - columns * (columnWidth + gap)) / 2 + 50;

    container.style.cssText = `
      columns-count: ${columns};
      padding-inline: ${paddingInline}px;
      column-gap: ${gap}px;
      column-width: ${columnWidth}px;
      align-items: flex-start; /* Add this line to align items at the top */
    `;

    const items = container.children;

    const itemCount = items.length;
    const itemsPerColumn = Math.ceil(itemCount / columns);
    const columnCounts = Array(columns).fill(0);

    for (let i = 0; i < itemCount; i++) {
      const columnIndex = i % columns;
      columnCounts[columnIndex]++;
    }

    this.columnHeights = Array(columns).fill(0);
    for (let i = 0; i < itemCount; i++) {
      const columnIndex = i % columns;
      const itemHeight = items[i].offsetHeight;
      this.columnHeights[columnIndex] += itemHeight;
    }

    let largestNumber = Math.max(...this.columnHeights);
    console.log(largestNumber);

    const columnImages = document.querySelectorAll(".masonry-item img");
    for (let i = 0; i < columnImages.length; i++) {
      const imageHeight = columnImages[i].offsetHeight;
      columnImages[i].style.height = "auto";

      const columnIndex = Math.floor(i / itemsPerColumn) + 1;
      if (i < 4) {
        columnImages[i].style.height = columnImages[i].offsetHeight + "px";
      }
    }
  };

  window.addEventListener("resize", positionItems);
  positionItems();
};

const masonry = new GamePrototype();

window.addEventListener("DOMContentLoaded", function rend() {
  masonry.render(".masonry", {
    columnWidth: 200,
    // autoResize: true,
  });
});
