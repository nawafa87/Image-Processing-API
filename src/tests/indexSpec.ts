import supertest from 'supertest';
import path from 'path';
import app from "../index";
import  sharpImage  from "../routes/utilities/resize";

describe('I will test the sharp function and with pass the dir path for image and high and width and dir path for thumbs', (): void => {
it('', async (): Promise<void> => {
  const dir = __dirname;
  const dirPathImg = path.join(dir, '../../images/winter.jpeg');
  const thumbs_dir = path.join(dir, '../../thumbs/winter-110x90.jpeg');  
  const result  = await sharpImage(dirPathImg,100,90,thumbs_dir);
  expect(result).toBe(true);
})});

describe('', (): void => {
  describe('the endpoint for image if there is no argeemnts will return 400 based in the conndition int the code', (): void => {
    it('', async (): Promise<void> => {
      const request = supertest(app);
      const res: supertest.Response = await request.get('/image');
      expect(res.status).toBe(400);
    }
    );
  })});

