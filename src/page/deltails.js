import Header from "../components/header";
import { get } from "../api/products";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
      
        ${Header.render()}
        <div class="contentct">
        
             <div class="home">
                 <a href="/"><i class="fas fa-home"></i>Trang chủ</a>
             </div>
             <div class="content-img-title">
                 <div class="img">
                     <img src="${data.img}" alt="" width="600px">
                 </div>
             <div class="mota">
                 <h2>${data.title}</h2>
                 <del>500.000đ</del>
                 <span>${data.desc}</span>
                 <ul>
                     <li>Trạng thái: còn hàng</li>
                     <li>Tình trạng: hàng mới 100%</li>
                     <li>Hình thức: Giao hàng toàn quốc & Thanh toán khi nhận hàng</li>
                 </ul>
                 <div>
                 <input type="number" id="inputValue" class="border border-gray-500" />
             </div>
                <div class="button">
                    <button id="btnAddToCart">THÊM VÀO GIỎ HÀNG</button>
                     <button id="btnAddToCart">MUA NGAY</button>
                </div>
                </div>
            </div>
            
               
            </div> 
        `;
    },
};
export default DetailProductPage;