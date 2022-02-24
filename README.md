## Server cho website blog cá nhân bằng nodejs với cơ sở dữ liệu MySQL 
### Thông tin nhóm: Nhóm 3
                 1. Lê Phương Anh    - 20183680 
                 2. Vũ Trung Nghĩa   - 20170102
                 3. Trần Khánh Lê    - 20183782
                 4. Đặng Quang Thắng - 20183829
### Phân công công việc:
 1. Lê Phương Anh (Server): CRD tags/catergories, CD comments, C ratings và tính trung bình ratings cho mỗi bài viết (post).
 2. Vũ Trung Nghĩa (Server): Thiết kế cơ sở dữ liệu, CRUD posts và users.
 3. Trần Khánh Lê (Client): Làm giao diện trang Thông tin người dùng, Trang Bài viết đơn, Trang Tạo bài viết (Trong trang tạo bài viết cho phép tạo trực tiếp các tag hay nhãn phân loại. Nếu muốn xóa bớt tag cho mỗi bài viết cần vào trang bài viết đơn để chỉnh sửa), Comment và Rating trong mỗi bài viết (Trong đó bình luận được kiểm tra một số cụm từ xấu trong một danh sách cho trước và nếu là từ xấu thì không được submit bình luận, nếu được submit thì sẽ hiển thị công khai. Submit form bằng AJAX.)
 4. Đặng Quang Thắng (Client): Làm giao diện trang Đăng ký, Đăng nhập, Trang chủ (Hiển thị các bài post theo thứ tự từ mới nhất đến cũ nhất), Responsive với các ngưỡng phân biệt bởi các giá trị 800px và 1200px.
> Project phía client: https://drive.google.com/drive/folders/11HoRyvgDirk125xwtdgp5ierwC4h5d9O?usp=sharing
### Hướng dẫn cài đặt và chạy toàn bộ dự án
#### 1. Server
Đầu tiên bạn cần clone project về máy của bạn. Sau đó bạn tiến hành cài đặt hệ quản trị cơ sở dữ liệu MqSQL nếu bạn chưa có, mở file Sql2.db trong MySql và chạy nó. Kết quả bạn nhận được là các bảng cơ sở dữ liệu cần có cho project này.
Sau khi clone project này về local thành công, bạn cần gõ các lệnh sau theo đúng thứ tự vào terminal của IDE mà bạn dùng để mở project.
- npm install
- npm start
> Project này sẽ chạy server ở cổng 2000.
#### 2. Client
Download code phía client theo đường link phía trên về cùng máy với server. Mở project và tiến hành npm install, sau đó npm start. Bạn sẽ nhìn thấy giao diện web của dự án website blog cá nhân.
Nếu bạn download project phía server và client trên 2 máy khác nhau thì bạn sẽ phải thay đổi biến targetURL trong file .env.
- email: test@gmail.com
- password: 123456

Cảm ơn bạn đã quan tâm đến project của chúng mình!
