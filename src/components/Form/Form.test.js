import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Koşulların onaylanmasına göre buton aktifliği", () => {
  //1)test edilecek olan bileşen render edilir
  render(<Form />);
  //2)gerekli elemanları çağır
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  //checkboxın tıklanmamış olduğunu kontrol et
  expect(checkbox).not.toBeChecked();
  //4)butonun inaktif olduğunu kontrol et
  expect(button).toBeDisabled();
  //5)checkbox a tıkla
  fireEvent.click(checkbox);
  //6)butonun aktif olduğunu kabul et
  expect(button).toBeEnabled();
  //7)checboxa tıkla
  fireEvent.click(checkbox);
  //8)butonun inaktif olduğunu kontrol et
  expect(button).toBeDisabled();
});
test("Onay butonun hover durumuna göre bildirim gözükür", () => {
  //1)form u renderla
  render(<Form />);
  //2)gerekli elemanları çağır
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  const alert = screen.getByText(/size gerçekten/i);
  //3)checkbox ı tıkla ve (buton aktif hale gelir)
  fireEvent.click(checkbox);

  //4)bildirim ekranda olmadığını kontrol et
  expect(alert).not.toBeVisible();
  //5)mouse butona getir
  fireEvent.mouseEnter(button);
  //6)bildirim ekrana geldi mi kontrol et
  expect(alert).toBeVisible();
  //7)mouse butondan çek
  fireEvent.mouseLeave(button);
  //8)bildirim ekrandan gitti mi kontrol et
  expect(alert).not.toBeVisible();
});
