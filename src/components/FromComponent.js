const FromComponent=()=>{
   return(
      <div>
         <form>
            <div className="from-comntrol">
               <label>ชื่อรายการ</label>
               <input type="text" placeholder="name"></input>
            </div>
            <div className="form-control">
               <label>จำนวนเงิน</label>
               <input type="number" placeholder="define money"></input>
            </div>

            <div>
               <button type='submit'>add data</button>
            </div>
         </form>
      </div>
   )
}

export default FromComponent;