import React from 'react'

const ReviewForm = () => {
  return (
    <Form>
        <Form.Group className="nb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />    
        </Form.Group>
        <Button variant="outline-info">Submit</Button>

    </Form>
  )
}

export default ReviewForm
