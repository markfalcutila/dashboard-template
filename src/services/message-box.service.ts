import { MessageBoxType, MessageType } from 'src/enums/message-box.enums';
import Swal from 'sweetalert2';

export class MessageBoxService {
  static async messageBox(
    title: string,
    message: string,
    messageType: MessageType = MessageType.INFO,
    messageBoxType: MessageBoxType = MessageBoxType.OK,
  ): Promise<boolean> {
    switch (messageBoxType) {
      case MessageBoxType.OK: {
        await Swal.fire({
          icon: messageType,
          title,
          text: message,
          showConfirmButton: true,
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'custom-confirm-class',
            icon: 'custom-success-icon',
          },
        });
        return true;
      }

      case MessageBoxType.PROCEED: {
        await Swal.fire({
          icon: messageType,
          title,
          text: message,
          showConfirmButton: true,
          confirmButtonText: 'PROCEED',
          customClass: {
            confirmButton: 'custom-confirm-class',
            icon: 'custom-success-icon',
          },
        });
        return true;
      }

      case MessageBoxType.YES_NO: {
        const yesNoResult = await Swal.fire({
          icon: MessageType.QUESTION,
          title,
          text: message,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        });
        return yesNoResult.isConfirmed;
      }
      case MessageBoxType.OK_CANCEL: {
        const okCancelResult = await Swal.fire({
          icon: MessageType.QUESTION,
          title,
          text: message,
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        });
        return okCancelResult.isConfirmed;
      }

      default:
        return true;
    }
  }

  static showLoader(title: string, message: string) {
    return Swal.fire({
      title,
      html: message,
      backdrop: 'static',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  static closeLoader() {
    Swal.close();
  }
}
