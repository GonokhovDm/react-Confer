import React from 'react'

function Feedback() {
  return (
    <div className="partners__feedback-item">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad illum repellendus reiciendis iusto sit aliquam possimus fugiat voluptas. 
        Necessitatibus sequi magnam itaque ducimus minus? Architecto maiores a officia reiciendis quae?
      </p>
      <div className="partners__feedback-item-author">
        <img src={require('../../assets/photo-1.jpg')} alt="" />
        <div>
          <h6>Maria Hernandez</h6>
          <span>UX Manager</span>
        </div>
      </div>
    </div>
  )
}

export default Feedback
