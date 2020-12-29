import React, { useEffect } from "react";
import ProductCard from "../ProductCard/productCard.jsx";
import { Pagination } from "antd";
import "./catalogo.css";

const Catalogo = ({
  products,
  paginated,
  paginator,
  page,
  handlePage,
  sort,
  sortStatus,
}) => {
    
  let limit = 30;
  let count = products.length;

  useEffect(() => {
    paginator(products, page);
  }, [page, products, sortStatus]);

  return (
    <div className="box-content">
      <div className="tabs">
        <button
          type="button"
          className="tab btn btn-light"
          name="asc"
          onClick={(e) => sort(e)}
        >
          $ 🡅
        </button>
        <button
          type="button"
          className="tab btn btn-light"
          name="desc"
          onClick={(e) => sort(e)}
        >
          $ 🡇
        </button>
      </div>
      <div className="cards">
        {paginated && paginated.map((p) => <ProductCard product={p} />)}
      </div>
      <Pagination
        current={page}
        pageSize={limit}
        total={count}
        onChange={handlePage}
      />
    </div>
  );
};

export default Catalogo;
