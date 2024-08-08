import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { validateRestaurantInput } from '../utils/validators';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

const FormGridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-weight: 600;
  color: #173B45;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #FF8225;
  }
`;

const RatingInput = styled(Input)`
  width: 40px;
  text-align: center;
  margin-left: 1.6rem
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
  &:focus {
    outline: none;
    border-color: #FF8225;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #FF8225;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #B43F3F;
  }
`;

const ErrorText = styled.div`
  color: #B43F3F;
  font-size: 14px;
`;

const ImageUploadContainer = styled.div`
  margin-bottom: 16px;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ImagePreviewWrapper = styled.div`
  position: relative;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: #B43F3F;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.7rem
`;

const RestaurantForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    cuisine: '',
    rating: '',
    openingHours: '',
    phoneNumber: '',
    images: [],
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Input restrictions
    if (name === 'rating') {
      updatedValue = value.replace(/[^0-5.]/g, '').replace(/(\..*)\./g, '$1');
    } else if (name === 'phoneNumber') {
      updatedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRestaurantInput(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit({
        ...formData,
        rating: parseFloat(formData.rating),
      });
    }
  };

  const handleImageRemove = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGrid>
        <FormGridItem>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Restaurant Name" required />
        </FormGridItem>
        <FormGridItem>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
        </FormGridItem>
        <FormGridItem>
          <InputLabel htmlFor="cuisine">Cuisine</InputLabel>
          <Input id="cuisine" name="cuisine" value={formData.cuisine} onChange={handleChange} placeholder="Cuisine" required />
        </FormGridItem>
        <FormGridItem>
          <RatingContainer>
            <InputLabel htmlFor="rating">Rating</InputLabel>
            <RatingInput
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Rating (1-5)"
              required
            />
          </RatingContainer>
        </FormGridItem>
        <FormGridItem>
          <InputLabel htmlFor="openingHours">Opening Hours</InputLabel>
          <Input id="openingHours" name="openingHours" value={formData.openingHours} onChange={handleChange} placeholder="Opening Hours (e.g., 09:00 - 22:00)" required />
        </FormGridItem>
        <FormGridItem>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <Input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number (10 digits)" required />
        </FormGridItem>
      </FormGrid>

      <InputLabel htmlFor="description">Description</InputLabel>
      <TextArea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />

      <InputLabel>Images</InputLabel>
      <ImageUploadContainer>
        <Input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        <ImagePreviewContainer>
          {formData.images.map((image, index) => (
            <ImagePreviewWrapper key={index}>
              <ImagePreview src={typeof image === 'string' ? image : image.src} alt={`Uploaded image ${index + 1}`} />
              <RemoveButton onClick={() => handleImageRemove(index)}>Remove</RemoveButton>
            </ImagePreviewWrapper>
          ))}
        </ImagePreviewContainer>
      </ImageUploadContainer>

      {errors.length > 0 && (
        <ErrorText>
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </ErrorText>
      )}

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default RestaurantForm;