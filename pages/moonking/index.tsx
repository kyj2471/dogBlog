import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

export default function TextFieldSizes() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h2>거래처 일반 정보</h2>
        <span>
          <TextField label="업체명" id="standard-size-normal" defaultValue="" />
        </span>
        <span>
          <TextField
            label="가맹점 코드"
            id="standard-size-normal"
            defaultValue="가맹점 코드"
          />
        </span>
        <span>
          <TextField
            label="사업자 유형"
            id="standard-size-normal"
            defaultValue="사업자 유형"
          />
        </span>
        <div>
          <span>
            <TextField
              label="관계사"
              id="standard-size-normal"
              defaultValue="관계사"
            />
          </span>
          <span>
            <TextField
              label="사업자등록번호"
              id="standard-size-normal"
              defaultValue="사업자등록번호"
            />
          </span>
          <span>
            <TextField
              label="휴폐업조회결과"
              id="standard-size-normal"
              defaultValue="휴폐업조회결과"
            />
          </span>
        </div>
        <div>
          <span>
            <TextField
              label="법인등록번호"
              id="standard-size-normal"
              defaultValue="법인등록번호"
            />
          </span>
          <span>
            <TextField
              label="대표자명"
              id="standard-size-normal"
              defaultValue="대표자명"
            />
          </span>
          <span>
            <TextField
              label="업태"
              id="standard-size-normal"
              defaultValue="업태"
            />
          </span>
        </div>
        <div>
          <span>
            <TextField
              label="종목"
              id="standard-size-normal"
              defaultValue="종목"
            />
          </span>
          <span>
            <TextField
              label="종사업장번호"
              id="standard-size-normal"
              defaultValue="종사업장번호"
            />
          </span>
          <span>
            <TextField
              label="지역"
              id="standard-size-normal"
              defaultValue="지역"
            />
          </span>
        </div>
        <div>
          <span>
            <TextField
              label="우편번호"
              id="standard-size-normal"
              defaultValue="우편번호"
            />
          </span>
          <span>
            <TextField
              label="도로명 주소"
              id="standard-size-normal"
              defaultValue="도로명 주소"
            />
          </span>
          <span>
            <TextField
              label="상세주소"
              id="standard-size-normal"
              defaultValue="상세주소"
            />
          </span>
        </div>
        <div>
          <span>
            <TextField
              label="전화번호"
              id="standard-size-normal"
              defaultValue="전화번호"
            />
          </span>
          <span>
            <TextField
              label="E-MAIL"
              id="standard-size-normal"
              defaultValue="E-MAIL"
            />
          </span>
        </div>

        <div>
          <h2>거래처 은행 및 거래정보</h2>
          <form className={classes.root} noValidate autoComplete="off">
            <span>
              <TextField
                label="은행코드"
                id="standard-size-normal"
                defaultValue="은행코드"
              />
            </span>
            <span>
              <TextField
                label="계좌번호"
                id="standard-size-normal"
                defaultValue="계좌번호"
              />
            </span>
            <span>
              <TextField
                label="예금주"
                id="standard-size-normal"
                defaultValue="예금주"
              />
            </span>
            <div>
              <span>
                <TextField
                  label="지급방법"
                  id="standard-size-normal"
                  defaultValue="지급방법"
                />
              </span>
              <span>
                <TextField
                  label="지급조건"
                  id="standard-size-normal"
                  defaultValue="지급조건"
                />
              </span>
            </div>
          </form>
        </div>

        <div>
          <h2>대체수취인정보</h2>
          <form className={classes.root} noValidate autoComplete="off">
            <span>
              <TextField
                label="대체수취인"
                id="standard-size-normal"
                defaultValue="대체수취인"
              />
            </span>
          </form>
        </div>

        <div>
          <h2>거래처 회계 정보</h2>
          <form className={classes.root} noValidate autoComplete="off">
            <span>
              <TextField
                label="조정계정"
                id="standard-size-normal"
                defaultValue="2103790009 미지급금_기타"
              />
            </span>

            <span>
              <TextField
                label="현금관리그룹"
                id="standard-size-normal"
                defaultValue="현금관리그룹"
              />
            </span>
          </form>
        </div>
      </div>
    </form>
  );
}
